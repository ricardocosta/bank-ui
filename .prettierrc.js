module.exports = {
  printWidth: 100,
  importOrder: ["<THIRD_PARTY_MODULES>", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
};
