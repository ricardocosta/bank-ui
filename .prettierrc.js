// @ts-check

/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  printWidth: 100,
  importOrder: ["<THIRD_PARTY_MODULES>", "^[./]", "<TYPES>", "<TYPES>^[./]"],
  importOrderBuiltinModulesToTop: true,
  importOrderMergeDuplicateImports: true,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  plugins: [require.resolve("@ianvs/prettier-plugin-sort-imports")],
};
