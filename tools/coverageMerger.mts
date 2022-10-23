import chalk from "chalk";
import * as fs from "fs/promises";
import g from "glob";
import path from "path";
import { promisify } from "util";

const glob = promisify(g);
const WRITE_PATH = path.resolve("./coverage/lcov.info");

const deleteMergedFile = async () => {
  console.log(chalk(`Deleting "${WRITE_PATH}"...`));
  try {
    await fs.rm(WRITE_PATH);
    console.log(chalk.red("Deleted", WRITE_PATH));
  } catch (e: unknown) {
    console.log(chalk.red(`Error deleting "${WRITE_PATH}"`, (e as Error).message));
  }
};

const getLcovFiles = async (dirName: string) => {
  console.log(chalk(`Finding coverage files in directory "${dirName}"...`));
  try {
    const files = await glob(`${dirName}/**/lcov.info`);

    console.log(chalk.green(`Found ${files.length} file(s):`));
    files.map((file) => {
      console.log(chalk(`- ${file}`));
    });

    return files;
  } catch (e: unknown) {
    console.log(
      chalk.red(
        `Error searching for coverage files in directory "${dirName}"`,
        (e as Error).message
      )
    );
    return [];
  }
};

(async () => {
  await deleteMergedFile();

  try {
    const files = await getLcovFiles("coverage");

    if (files.length === 0) {
      console.log(chalk("No coverage files to merge. Skipping..."));
      return;
    }

    let mergedReport = "";

    for (const file of files) {
      const fileContent = await fs.readFile(file);
      mergedReport += fileContent;
    }

    console.log(chalk("Writing merged report to", WRITE_PATH));

    await fs.writeFile(WRITE_PATH, mergedReport);
    console.log(chalk.green("Merged report saved to", WRITE_PATH));
  } catch (e: unknown) {
    console.log(chalk.red("Error writing merged report", (e as Error).message));
  }
})();
