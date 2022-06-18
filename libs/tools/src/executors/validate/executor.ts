import type { ExecutorContext } from "@nrwl/devkit";
import { runExecutor } from "@nrwl/devkit";

import type { ValidateExecutorSchema } from "./schema";

export default async function multipleExecutor(
  options: ValidateExecutorSchema,
  context: ExecutorContext
): Promise<{ success: boolean }> {
  if (!context.projectName) {
    console.warn("No project name provided. Aborting...");
    return { success: false };
  }

  const { dryRun } = options;

  const result = await Promise.race([
    await runExecutor(
      { project: context.projectName, target: dryRun ? "formatDry" : "format" },
      {},
      context
    ),
    await runExecutor({ project: context.projectName, target: "lint" }, {}, context),
    await runExecutor({ project: context.projectName, target: "ts" }, {}, context),
  ]);

  for await (const res of result) {
    if (!res.success) {
      return res;
    }
  }

  return { success: true };
}
