// @ts-check

/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  printWidth: 100,
  importOrder: [
    "<BUILTIN_MODULES>",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^[./]",
    "",
    "<TYPES>",
    "",
    "<TYPES>^[./]",
  ],
  plugins: [require.resolve("@ianvs/prettier-plugin-sort-imports")],
};
