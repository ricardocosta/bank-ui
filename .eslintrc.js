module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ["@nx/eslint-plugin", "sonarjs"],
  extends: [
    "eslint:recommended",
    "plugin:compat/recommended",
    "plugin:json/recommended",
    "prettier",
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
      extends: ["plugin:sonarjs/recommended"],
      rules: {
        "@nx/enforce-module-boundaries": [
          "error",
          {
            enforceBuildableLibDependency: true,
            allow: [],
            depConstraints: [
              {
                sourceTag: "*",
                onlyDependOnLibsWithTags: ["*"],
              },
            ],
          },
        ],
        "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
        "@typescript-eslint/consistent-type-imports": [
          "error",
          { prefer: "type-imports", fixStyle: "separate-type-imports" },
        ],
      },
    },
    {
      files: ["*.ts", "*.tsx"],
      extends: ["plugin:@nx/typescript"],
      rules: {},
    },
    {
      files: ["*.js", "*.jsx"],
      extends: ["plugin:@nx/javascript"],
      rules: {},
    },
  ],
};
