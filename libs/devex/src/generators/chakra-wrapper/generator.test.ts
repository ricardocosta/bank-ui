import { readJson, readProjectConfiguration } from "@nx/devkit";
import { createTreeWithEmptyWorkspace } from "@nx/devkit/testing";
import { HttpResponse, rest } from "msw";
import { setupServer } from "msw/node";
import { afterAll, afterEach, beforeAll, describe } from "vitest";

import chakraWrapperGenerator from "./generator";

import type { PackageJson } from "type-fest";

import type { ChakraWrapperGeneratorSchema } from "./schema";

const UI_BUTTON_ROOT = "libs/ui/ui-button";
const BUTTON_PACKAGE_NAME = "@chakra-ui/button";
const SYSTEM_PACKAGE_NAME = "@chakra-ui/system";
const BUTTON_PACKAGE_INFO = {
  name: BUTTON_PACKAGE_NAME,
  version: "2.0.13",
  peerDependencies: { [SYSTEM_PACKAGE_NAME]: ">=2.0.0", react: ">=18" },
};
const SYSTEM_PACKAGE_INFO = {
  name: SYSTEM_PACKAGE_NAME,
  version: "2.3.4",
  peerDependencies: {
    "@emotion/react": "^11.0.0",
    "@emotion/styled": "^11.0.0",
    react: ">=18",
  },
};

export const restHandlers = [
  rest.get(`https://registry.npmjs.org/${BUTTON_PACKAGE_NAME}/latest`, () => {
    return HttpResponse.json(BUTTON_PACKAGE_INFO);
  }),
  rest.get(`https://registry.npmjs.org/${SYSTEM_PACKAGE_NAME}/latest`, () => {
    return HttpResponse.json(SYSTEM_PACKAGE_INFO);
  }),
];

describe("Generators / ChakraWrapper", () => {
  const options: ChakraWrapperGeneratorSchema = { name: "ui-button", chakraPackage: "button" };

  const server = setupServer(...restHandlers);
  beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
  afterAll(() => server.close());
  afterEach(() => server.resetHandlers());

  it("generates the project configuration", async () => {
    const tree = createTreeWithEmptyWorkspace({ layout: "apps-libs" });
    await chakraWrapperGenerator(tree, options);

    const config = readProjectConfiguration(tree, "ui-button");
    expect(config).toHaveProperty("name", "ui-button");
    expect(config).toHaveProperty("projectType", "library");
    expect(config).toHaveProperty("sourceRoot", "libs/ui/ui-button/src");
    expect(config).toHaveProperty("tags", []);
  });

  it("adds targets to the project configuration", async () => {
    const tree = createTreeWithEmptyWorkspace({ layout: "apps-libs" });
    await chakraWrapperGenerator(tree, options);

    const config = readProjectConfiguration(tree, "ui-button");
    config.targets && expect(Object.keys(config.targets)).toHaveLength(5);
    expect(config.targets).toHaveProperty("build");
    expect(config.targets).toHaveProperty("lint");
    expect(config.targets).toHaveProperty("format");
    expect(config.targets).toHaveProperty("formatDry");
    expect(config.targets).toHaveProperty("ts");
  });

  it("generates the library files", async () => {
    const tree = createTreeWithEmptyWorkspace({ layout: "apps-libs" });
    await chakraWrapperGenerator(tree, options);

    expect(tree.exists(`${UI_BUTTON_ROOT}/tsconfig.json`)).toBeTruthy();
    expect(tree.exists(`${UI_BUTTON_ROOT}/src/index.ts`)).toBeTruthy();
  });

  it("adds ESLint configuration", async () => {
    const tree = createTreeWithEmptyWorkspace({ layout: "apps-libs" });
    await chakraWrapperGenerator(tree, options);

    expect(tree.exists(`${UI_BUTTON_ROOT}/.eslintrc.json`)).toBeTruthy();
  });

  it("adds Vite configuration", async () => {
    const tree = createTreeWithEmptyWorkspace({ layout: "apps-libs" });
    await chakraWrapperGenerator(tree, options);

    const viteFile = tree.read(`${UI_BUTTON_ROOT}/vite.config.ts`)?.toString();
    expect(viteFile).toMatchSnapshot();
  });

  it("adds package.json", async () => {
    const tree = createTreeWithEmptyWorkspace({ layout: "apps-libs" });
    await chakraWrapperGenerator(tree, options);

    const packageJsonFile = tree.read(`${UI_BUTTON_ROOT}/package.json`)?.toString();
    expect(packageJsonFile).toMatchSnapshot();
  });

  it("adds Chakra package to dependencies", async () => {
    const tree = createTreeWithEmptyWorkspace({ layout: "apps-libs" });
    await chakraWrapperGenerator(tree, options);

    const packageJsonFile = readJson<PackageJson>(tree, "package.json");
    expect(packageJsonFile.dependencies).toHaveProperty(BUTTON_PACKAGE_NAME, "^2.0.13");
  });

  it("adds Chakra peer dependencies to dependencies", async () => {
    const tree = createTreeWithEmptyWorkspace({ layout: "apps-libs" });
    await chakraWrapperGenerator(tree, options);

    const packageJsonFile = readJson<PackageJson>(tree, "package.json");
    expect(packageJsonFile.dependencies).toHaveProperty(SYSTEM_PACKAGE_NAME, "^2.3.4");
  });

  describe("when custom tags are provided", () => {
    it("adds targets to the project configuration", async () => {
      const customDirOptions: ChakraWrapperGeneratorSchema = {
        ...options,
        tags: "tag1, tag2",
      };
      const tree = createTreeWithEmptyWorkspace({ layout: "apps-libs" });
      await chakraWrapperGenerator(tree, customDirOptions);

      const config = readProjectConfiguration(tree, "ui-button");
      expect(config).toHaveProperty("tags", ["tag1", "tag2"]);
    });
  });
});
