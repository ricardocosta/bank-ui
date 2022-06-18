/* This script generates db.json for local development. */
import { copyFile, readFile, writeFile } from "fs/promises";

const BASE_PATH = "./src/server";
const SOURCES: Record<string, string> = {};

let db = {};

const readPartialDB = async (filePath: string): Promise<Record<string, unknown>> => {
  const data = await readFile(`${BASE_PATH}/${filePath}`, "utf8").catch((err) =>
    console.error("Failed to read file", err)
  );

  return data ? JSON.parse(data.toString()) : {};
};

const loadDb = async (): Promise<void> => {
  for (const name of Object.keys(SOURCES)) {
    console.log("Reading", name);

    const data = await readPartialDB(SOURCES[name]);

    db = {
      ...db,
      [name]: data,
    };
  }
};

const writeToBaseDB = async (): Promise<void> => {
  await writeFile(`${BASE_PATH}/db.base.json`, JSON.stringify(db, null, 2)).catch((err) =>
    console.error("Failed to write file", err)
  );
};

const copyToRuntimeDB = async (): Promise<void> => {
  await copyFile(`${BASE_PATH}/db.base.json`, `${BASE_PATH}/db.json`).catch((err) =>
    console.error("Failed to copy file", err)
  );
};

(async (): Promise<void> => {
  await loadDb();
  await writeToBaseDB();
  await copyToRuntimeDB();

  console.log("Database is ready!");
})();
