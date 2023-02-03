import * as path from "path";

import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  getProjects,
  getWorkspaceLayout,
  names,
  offsetFromRoot,
  readJson,
} from "@nrwl/devkit";

import type { TargetConfiguration, Tree } from "@nrwl/devkit";

import type { AppGeneratorSchema } from "./schema";

interface NormalizedSchema extends AppGeneratorSchema {
  projectName: string;
  projectRoot: string;
  projectDirectory: string;
  parsedTags: string[];
  appPort: number;
}

const NX_COMMANDS: Record<string, string> = {
  run: "nx:run-commands",
  lint: "@nrwl/linter:eslint",
  vite_build: "@nrwl/vite:build",
  vite_serve: "@nrwl/vite:dev-server",
  vite_preview: "@nrwl/vite:preview-server",
};

async function findAvailablePort(tree: Tree) {
  const projects = getProjects(tree);
  const appsDir = getWorkspaceLayout(tree).appsDir;

  // Get all the applications's configs.json files
  const configFiles = Array.from(projects)
    .filter(([_, config]) => config.root.startsWith(appsDir) && !config.name?.endsWith(`-e2e`))
    .map(([_, config]) => path.join(config.root, "configs.json"));

  const usedPorts: number[] = configFiles.map((file) => {
    const jsonFile = readJson(tree, file);
    return jsonFile.appPort;
  });

  return usedPorts.length === 0 ? 3001 : Math.max(...usedPorts) + 1;
}

async function normalizeOptions(
  tree: Tree,
  options: AppGeneratorSchema
): Promise<NormalizedSchema> {
  const name = names(options.name).fileName;
  const projectDirectory = options.directory
    ? `${names(options.directory).fileName}/${name}`
    : name;
  const projectName = projectDirectory.replace(new RegExp("/", "g"), "-");
  const projectRoot = `${getWorkspaceLayout(tree).appsDir}/${projectDirectory}`;
  const parsedTags = options.tags ? options.tags.split(",").map((s) => s.trim()) : [];
  const appPort = await findAvailablePort(tree);

  return {
    ...options,
    projectName,
    projectRoot,
    projectDirectory,
    parsedTags,
    appPort,
  };
}

function createAppTargets(options: NormalizedSchema) {
  const { projectRoot, restServer, projectName } = options;

  const targets: Record<string, TargetConfiguration> = {
    build: {
      executor: NX_COMMANDS.vite_build,
      options: {
        outputPath: `dist/${projectRoot}`,
        configFile: `${projectRoot}/vite.config.ts`,
      },
    },
    dev: {
      executor: NX_COMMANDS.vite_serve,
      defaultConfiguration: "development",
      options: {
        buildTarget: `${projectName}:build`,
        configFile: `${projectRoot}/vite.config.ts`,
      },
    },
    preview: {
      executor: NX_COMMANDS.vite_preview,
      defaultConfiguration: "development",
      options: {
        buildTarget: `${projectName}:build`,
        configFile: `${projectRoot}/vite.config.ts`,
      },
    },
    test: {
      executor: NX_COMMANDS.run,
      options: {
        command: "vitest run --reporter verbose",
        cwd: projectRoot,
        color: true,
      },
    },
    testCoverage: {
      executor: NX_COMMANDS.run,
      options: {
        commands: [
          "vitest run --coverage",
          `rm -rf ../../coverage/${projectRoot}`,
          `mkdir -p ../../coverage/${projectRoot}`,
          `mv -v coverage/* ../../coverage/${projectRoot}`,
        ],
        parallel: false,
        cwd: projectRoot,
        color: true,
      },
    },
    testUi: {
      executor: NX_COMMANDS.run,
      options: {
        command: "vitest --ui --open",
        cwd: projectRoot,
        color: true,
      },
    },
    testWatch: {
      executor: NX_COMMANDS.run,
      options: {
        command: "vitest watch --reporter verbose",
        cwd: projectRoot,
        color: true,
      },
    },
    lint: {
      executor: NX_COMMANDS.lint,
      options: {
        eslintConfig: `${projectRoot}/.eslintrc.js`,
        lintFilePatterns: [`${projectRoot}/src/**/*.{ts,mts,tsx,js,jsx}`],
      },
    },
    format: {
      executor: NX_COMMANDS.run,
      options: {
        command:
          "prettier --write '**/*.{ts,mts,tsx,js,jsx,json,css}' --ignore-path ../../.prettierignore",
        cwd: projectRoot,
        color: true,
      },
    },
    formatDry: {
      executor: NX_COMMANDS.run,
      options: {
        command:
          "prettier --check '**/*.{ts,mts,tsx,js,jsx,json,css}' --ignore-path ../../.prettierignore",
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

  if (restServer) {
    targets["seedDb"] = {
      executor: NX_COMMANDS.run,
      options: {
        commands: [
          "tsm ./server/initJsonDb.mts",
          "prettier --write ./server/db.base.json ./server/db.json",
        ],
        cwd: projectRoot,
        color: true,
      },
    };
  }

  return targets;
}

function createE2ETargets(options: NormalizedSchema) {
  const { projectRoot, projectName, appPort } = options;

  const targets: Record<string, TargetConfiguration> = {
    e2e: {
      executor: NX_COMMANDS.run,
      options: {
        command: "playwright test",
        cwd: `${projectRoot}-e2e`,
        color: true,
      },
    },
    codegen: {
      executor: NX_COMMANDS.run,
      options: {
        commands: [`nx run ${projectName}:dev`, `playwright codegen http://localhost:${appPort}`],
        color: true,
      },
    },
  };

  return targets;
}

function addAppFiles(tree: Tree, options: NormalizedSchema) {
  const templateOptions = {
    ...options,
    ...names(options.name),
    offsetFromRoot: offsetFromRoot(options.projectRoot),
    template: "",
  };

  generateFiles(tree, path.join(__dirname, "files/app"), options.projectRoot, templateOptions);
}

function addRestServerFiles(tree: Tree, options: NormalizedSchema) {
  const templateOptions = {
    ...options,
    ...names(options.name),
    offsetFromRoot: offsetFromRoot(options.projectRoot),
    template: "",
  };

  generateFiles(tree, path.join(__dirname, "files/server"), options.projectRoot, templateOptions);
}

function addE2EAppFiles(tree: Tree, options: NormalizedSchema) {
  const templateOptions = {
    ...options,
    ...names(options.name),
    offsetFromRoot: offsetFromRoot(options.projectRoot),
    template: "",
  };

  generateFiles(
    tree,
    path.join(__dirname, "files/e2e"),
    `${options.projectRoot}-e2e`,
    templateOptions
  );
}

export default async function (tree: Tree, options: AppGeneratorSchema) {
  const normalizedOptions = await normalizeOptions(tree, options);
  const appTargets = createAppTargets(normalizedOptions);

  addProjectConfiguration(tree, normalizedOptions.projectName, {
    root: normalizedOptions.projectRoot,
    projectType: "application",
    sourceRoot: `${normalizedOptions.projectRoot}/src`,
    targets: appTargets,
    tags: normalizedOptions.parsedTags,
  });

  addAppFiles(tree, normalizedOptions);

  if (normalizedOptions.restServer) {
    addRestServerFiles(tree, normalizedOptions);
  }

  if (normalizedOptions.e2e) {
    const e2eTargets = createE2ETargets(normalizedOptions);

    addE2EAppFiles(tree, normalizedOptions);
    addProjectConfiguration(tree, normalizedOptions.projectName, {
      root: `${normalizedOptions.projectRoot}-e2e`,
      name: `${normalizedOptions.projectName}-e2e`,
      projectType: "application",
      sourceRoot: `${normalizedOptions.projectRoot}-e2e/src`,
      implicitDependencies: [normalizedOptions.projectName],
      targets: e2eTargets,
    });
  }

  await formatFiles(tree);
}
