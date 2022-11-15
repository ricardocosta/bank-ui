module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ["@nrwl/nx", "sonarjs"],
  extends: [
    "eslint:recommended",
    "plugin:sonarjs/recommended",
    "plugin:compat/recommended",
    "prettier",
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
      rules: {
        "@nrwl/nx/enforce-module-boundaries": [
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
      },
    },
    {
      files: ["*.ts", "*.tsx"],
      extends: ["plugin:@nrwl/nx/typescript"],
      rules: {},
    },
    {
      files: ["*.js", "*.jsx"],
      extends: ["plugin:@nrwl/nx/javascript"],
      rules: {},
    },
  ],
};
