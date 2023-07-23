import * as path from "path";

import {
  addDependenciesToPackageJson,
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  getWorkspaceLayout,
  installPackagesTask,
  names,
  offsetFromRoot,
  readRootPackageJson,
  updateJson,
} from "@nx/devkit";
import chalk from "chalk";

import type { TargetConfiguration, Tree } from "@nx/devkit";
import type { PackageJson } from "type-fest";
import type { CompilerOptions } from "typescript";

import type { ChakraWrapperGeneratorSchema } from "./schema";

type PeerDependency = PackageJson.Dependency;

interface NormalizedSchema extends ChakraWrapperGeneratorSchema {
  projectName: string;
  projectRoot: string;
  projectDirectory: string;
  parsedTags: string[];
  packageName: string;
}

const NX_COMMANDS: Record<string, string> = {
  run: "nx:run-commands",
  lint: "@nx/linter:eslint",
  vite_build: "@nx/vite:build",
};

function normalizeOptions(tree: Tree, options: ChakraWrapperGeneratorSchema): NormalizedSchema {
  const name = names(options.name).fileName;
  const projectDirectory = `${names("ui").fileName}/${name}`;
  const projectName = name.replace(new RegExp("/", "g"), "-");
  const projectRoot = `${getWorkspaceLayout(tree).libsDir}/${projectDirectory}`;
  const parsedTags = options.tags ? options.tags.split(",").map((s) => s.trim()) : [];
  const packageName = `@chakra-ui/${options.chakraPackage}`;

  return {
    ...options,
    projectName,
    projectRoot,
    projectDirectory,
    parsedTags,
    packageName,
  };
}

function getPackageInfo(packageName: string): Promise<PackageJson> {
  return fetch(`https://registry.npmjs.org/${packageName}/latest`, {
    headers: {
      "Accept-Encoding": "application/json",
    },
  }).then((response) => {
    return response.json() as Promise<PackageJson>;
  });
}

function getLatestVersion(packageName: string): Promise<string> {
  console.log(chalk.yellow("Fetching latest version of", packageName));

  return getPackageInfo(packageName).then((json) => json.version!);
}

function getPeerDependencies(packageName: string): Promise<PeerDependency> {
  console.log(chalk.yellow("Fetching peer dependencies of", packageName));

  return getPackageInfo(packageName).then((json) => json.peerDependencies!);
}

function createProjectTargets(options: NormalizedSchema) {
  const { projectRoot } = options;
  const offset = offsetFromRoot(options.projectRoot);

  const targets: Record<string, TargetConfiguration> = {
    build: {
      executor: NX_COMMANDS.vite_build,
      options: {
        outputPath: `dist/${projectRoot}`,
        configFile: `${projectRoot}/vite.config.ts`,
        manifest: true,
      },
    },
    lint: {
      executor: NX_COMMANDS.lint,
      options: {
        eslintConfig: `${projectRoot}/.eslintrc.json`,
        lintFilePatterns: [`${projectRoot}/src/**/*.{ts,mts,tsx,js,jsx}`],
      },
    },
    format: {
      executor: NX_COMMANDS.run,
      options: {
        command: `prettier --write '**/*.{ts,mts,tsx,js,jsx,json,css}' --ignore-path ${offset}.prettierignore`,
        cwd: projectRoot,
        color: true,
      },
    },
    formatDry: {
      executor: NX_COMMANDS.run,
      options: {
        command: `prettier --check '**/*.{ts,mts,tsx,js,jsx,json,css}' --ignore-path ${offset}.prettierignore`,
        cwd: projectRoot,
        color: true,
      },
    },
    ts: {
      executor: NX_COMMANDS.run,
      options: {
        command: "bash -c tsc --noEmit -p ./tsconfig.json",
        cwd: projectRoot,
        color: true,
      },
    },
  };

  return targets;
}

function addLibFiles(tree: Tree, options: NormalizedSchema, peerDependencies: PeerDependency) {
  const templateOptions = {
    ...options,
    ...names(options.name),
    offsetFromRoot: offsetFromRoot(options.projectRoot),
    template: "",
    peerDependencies,
  };

  generateFiles(tree, path.join(__dirname, "files"), options.projectRoot, templateOptions);
}

function updatedTsConfig(tree: Tree, options: NormalizedSchema) {
  updateJson<{ compilerOptions: CompilerOptions }>(tree, "./tsconfig.base.json", (value) => ({
    ...value,
    compilerOptions: {
      ...value.compilerOptions,
      paths: {
        ...value.compilerOptions.paths,
        [`@ricardocosta/${options.projectName}`]: [`${options.projectRoot}/src/index.ts`],
      },
    },
  }));
}

export default async function (tree: Tree, options: ChakraWrapperGeneratorSchema) {
  const normalizedOptions = normalizeOptions(tree, options);
  const projectTargets = createProjectTargets(normalizedOptions);
  const packageName = normalizedOptions.packageName;
  const packageVersion = await getLatestVersion(packageName);

  // Keep the same versions as in root when specifying peer dependencies for the new lib
  const peerDependencies: PeerDependency = {};
  const rootPackageJson = readRootPackageJson();
  peerDependencies["@emotion/react"] = rootPackageJson.dependencies?.["@emotion/react"];
  peerDependencies["@emotion/styled"] = rootPackageJson.dependencies?.["@emotion/styled"];
  peerDependencies["framer-motion"] = rootPackageJson.dependencies?.["framer-motion"];
  peerDependencies.react = rootPackageJson.dependencies?.react;
  peerDependencies["react-dom"] = rootPackageJson.dependencies?.["react-dom"];

  addProjectConfiguration(tree, normalizedOptions.projectName, {
    root: normalizedOptions.projectRoot,
    projectType: "library",
    sourceRoot: `${normalizedOptions.projectRoot}/src`,
    targets: projectTargets,
    tags: normalizedOptions.parsedTags,
  });

  addLibFiles(tree, normalizedOptions, peerDependencies);
  updatedTsConfig(tree, normalizedOptions);

  // Figure out what we need to add to the root package.json
  addDependenciesToPackageJson(tree, { [packageName]: `^${packageVersion}` }, {});
  const packagePeerDependencies = await getPeerDependencies(packageName);
  for (const pkg of Object.keys(packagePeerDependencies)) {
    if (pkg.startsWith("@chakra-ui")) {
      const version = await getLatestVersion(pkg);
      addDependenciesToPackageJson(tree, { [pkg]: `^${version}` }, {});
    }
  }

  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
