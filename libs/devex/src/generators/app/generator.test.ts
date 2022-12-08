import { readJson, readProjectConfiguration } from "@nrwl/devkit";
import { createTreeWithEmptyWorkspace } from "@nrwl/devkit/testing";
import { describe } from "vitest";

import appGenerator from "./generator";
import { AppGeneratorSchema } from "./schema";

const DEMO_APP_ROOT = "apps/demo";
const DEMO_APP_E2E_ROOT = "apps/demo-e2e";

describe("Generators / App", () => {
  const options: AppGeneratorSchema = { name: "demo", e2e: false, restServer: false };

  it("generates the project configuration", async () => {
    const appTree = createTreeWithEmptyWorkspace({ layout: "apps-libs" });
    await appGenerator(appTree, options);

    const config = readProjectConfiguration(appTree, "demo");

    expect(config).toHaveProperty("$schema", "../../node_modules/nx/schemas/project-schema.json");
    expect(config).toHaveProperty("name", "demo");
    expect(config).toHaveProperty("projectType", "application");
    expect(config).toHaveProperty("sourceRoot", "apps/demo/src");
    expect(config).toHaveProperty("root", "apps/demo");
    expect(config).toHaveProperty("tags", []);
  });

  it("adds targets to the project configuration", async () => {
    const appTree = createTreeWithEmptyWorkspace({ layout: "apps-libs" });
    await appGenerator(appTree, options);

    const config = readProjectConfiguration(appTree, "demo");

    config.targets && expect(Object.keys(config.targets)).toHaveLength(10);
    expect(config.targets).toHaveProperty("build");
    expect(config.targets).toHaveProperty("dev");
    expect(config.targets).toHaveProperty("test");
    expect(config.targets).toHaveProperty("testCoverage");
    expect(config.targets).toHaveProperty("testUi");
    expect(config.targets).toHaveProperty("testWatch");
    expect(config.targets).toHaveProperty("lint");
    expect(config.targets).toHaveProperty("format");
    expect(config.targets).toHaveProperty("formatDry");
    expect(config.targets).toHaveProperty("ts");
  });

  it("generates the application files", async () => {
    const appTree = createTreeWithEmptyWorkspace({ layout: "apps-libs" });
    await appGenerator(appTree, options);

    expect(appTree.exists(`${DEMO_APP_ROOT}/index.html`)).toBeTruthy();
    expect(appTree.exists(`${DEMO_APP_ROOT}/setupTests.ts`)).toBeTruthy();
    expect(appTree.exists(`${DEMO_APP_ROOT}/tsconfig.json`)).toBeTruthy();
    expect(appTree.exists(`${DEMO_APP_ROOT}/tsconfig.node.json`)).toBeTruthy();

    expect(appTree.exists(`${DEMO_APP_ROOT}/src/App.css`)).toBeTruthy();
    expect(appTree.exists(`${DEMO_APP_ROOT}/src/App.test.tsx`)).toBeTruthy();
    expect(appTree.exists(`${DEMO_APP_ROOT}/src/App.tsx`)).toBeTruthy();
    expect(appTree.exists(`${DEMO_APP_ROOT}/src/favicon.svg`)).toBeTruthy();
    expect(appTree.exists(`${DEMO_APP_ROOT}/src/index.css`)).toBeTruthy();
    expect(appTree.exists(`${DEMO_APP_ROOT}/src/logo.svg`)).toBeTruthy();
    expect(appTree.exists(`${DEMO_APP_ROOT}/src/main.tsx`)).toBeTruthy();
    expect(appTree.exists(`${DEMO_APP_ROOT}/src/vite-env.d.ts`)).toBeTruthy();
  });

  it("adds ESLint configuration", async () => {
    const appTree = createTreeWithEmptyWorkspace({ layout: "apps-libs" });
    await appGenerator(appTree, options);

    expect(appTree.exists(`${DEMO_APP_ROOT}/.eslintrc.js`)).toBeTruthy();
  });

  it("generates app port", async () => {
    const appTree = createTreeWithEmptyWorkspace({ layout: "apps-libs" });
    await appGenerator(appTree, options);

    const configFile = readJson(appTree, `${DEMO_APP_ROOT}/configs.json`);
    expect(configFile["appPort"]).toEqual(3001);
  });

  it("increments app port if another app already exists", async () => {
    const appTree = createTreeWithEmptyWorkspace({ layout: "apps-libs" });
    await appGenerator(appTree, options);

    const anotherAppOptions = { ...options, name: "another-app" };
    await appGenerator(appTree, anotherAppOptions);

    const configFile = readJson(appTree, "apps/another-app/configs.json");
    expect(configFile["appPort"]).toEqual(3002);
  });

  it("adds Vite configuration", async () => {
    const appTree = createTreeWithEmptyWorkspace({ layout: "apps-libs" });
    await appGenerator(appTree, options);

    const viteFile = appTree.read(`${DEMO_APP_ROOT}/vite.config.ts`)?.toString();
    expect(viteFile).toMatchSnapshot();
  });

  it("adds Vitest configuration", async () => {
    const appTree = createTreeWithEmptyWorkspace({ layout: "apps-libs" });
    await appGenerator(appTree, options);

    const vitestFile = appTree.read(`${DEMO_APP_ROOT}/vitest.config.ts`)?.toString();
    expect(vitestFile).toMatchSnapshot();
  });

  it("does not add E2E app", async () => {
    const appTree = createTreeWithEmptyWorkspace({ layout: "apps-libs" });
    await appGenerator(appTree, options);

    expect(appTree.exists(DEMO_APP_ROOT)).toBeTruthy();
    expect(appTree.exists(DEMO_APP_E2E_ROOT)).toBeFalsy();
  });

  describe("when custom tags are provided", () => {
    it("adds targets to the project configuration", async () => {
      const customDirOptions: AppGeneratorSchema = {
        ...options,
        tags: "tag1, tag2",
      };
      const appTree = createTreeWithEmptyWorkspace({ layout: "apps-libs" });
      await appGenerator(appTree, customDirOptions);

      const config = readProjectConfiguration(appTree, "demo");

      expect(config).toHaveProperty("tags", ["tag1", "tag2"]);
    });
  });

  describe("when custom directory is provided", () => {
    it("generates files in the custom directory", async () => {
      const customDirOptions: AppGeneratorSchema = {
        ...options,
        directory: "custom-demo",
        e2e: true,
      };
      const appTree = createTreeWithEmptyWorkspace({ layout: "apps-libs" });
      await appGenerator(appTree, customDirOptions);

      expect(appTree.exists(DEMO_APP_ROOT)).toBeFalsy();
      expect(appTree.exists("apps/custom-demo/demo")).toBeTruthy();
      expect(appTree.exists("apps/custom-demo/demo-e2e")).toBeTruthy();
    });
  });

  describe("when E2E app should be created", () => {
    const e2eOptions: AppGeneratorSchema = { ...options, e2e: true };

    it("generates E2E project configuration", async () => {
      const appTree = createTreeWithEmptyWorkspace({ layout: "apps-libs" });
      await appGenerator(appTree, e2eOptions);

      const config = readProjectConfiguration(appTree, "demo-e2e");

      config.targets && expect(Object.keys(config.targets)).toHaveLength(2);
      expect(config.targets).toHaveProperty("e2e");
      expect(config.targets).toHaveProperty("codegen");
    });

    it("adds Playwright configuration", async () => {
      const appTree = createTreeWithEmptyWorkspace({ layout: "apps-libs" });
      await appGenerator(appTree, e2eOptions);

      const playwrightFile = appTree.read(`${DEMO_APP_E2E_ROOT}/playwright.config.ts`)?.toString();
      expect(playwrightFile).toMatchSnapshot();
    });
  });

  describe("when Rest server should be added", () => {
    const serverOptions: AppGeneratorSchema = { ...options, restServer: true };

    it("generates database initializer script", async () => {
      const appTree = createTreeWithEmptyWorkspace({ layout: "apps-libs" });
      await appGenerator(appTree, serverOptions);

      expect(appTree.exists(`${DEMO_APP_ROOT}/server/initJsonDb.mts`)).toBeTruthy();
    });
  });
});
