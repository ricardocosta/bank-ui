/* This script generates db.json for local development. */
import * as fs from "fs/promises";

const BASE_PATH = "./server";
const SOURCES: Record<string, string> = {};

let db = {};

const readPartialDB = async (filePath: string) => {
  const data = await fs
    .readFile(`${BASE_PATH}/${filePath}`, "utf8")
    .catch((err) => console.error("Failed to read file", err));

  return data ? JSON.parse(data.toString()) : {};
};

const loadDb = async () => {
  for (const name of Object.keys(SOURCES)) {
    console.log("Reading", name);

    const data = await readPartialDB(SOURCES[name]);

    db = {
      ...db,
      [name]: data,
    };
  }
};

const writeToBaseDB = async () => {
  await fs
    .writeFile(`${BASE_PATH}/db.base.json`, JSON.stringify(db, null, 2))
    .catch((err) => console.error("Failed to write file", err));
};

const copyToRuntimeDB = async () => {
  await fs
    .copyFile(`${BASE_PATH}/db.base.json`, `${BASE_PATH}/db.json`)
    .catch((err) => console.error("Failed to copy file", err));
};

(async () => {
  await loadDb();
  await writeToBaseDB();
  await copyToRuntimeDB();

  console.log("Database is ready!");
})();
