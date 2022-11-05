import { readProjectConfiguration, Tree } from "@nrwl/devkit";
import { createTreeWithEmptyWorkspace } from "@nrwl/devkit/testing";

import generator from "./generator";
import { AppGeneratorSchema } from "./schema";

describe("app generator", () => {
  let appTree: Tree;
  const options: AppGeneratorSchema = { name: "test" };

  beforeEach(() => {
    appTree = createTreeWithEmptyWorkspace();
  });

  it("should run successfully", async () => {
    await generator(appTree, options);
    const config = readProjectConfiguration(appTree, "test");
    expect(config).toBeDefined();
  });
});
