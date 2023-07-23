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
  settings: {
    react: {
      version: "detect",
    },
  },
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
      },
    },
    {
      files: ["*.ts", "*.tsx"],
      plugins: ["@typescript-eslint"],
      parser: "@typescript-eslint/parser",
      parserOptions: { project: ["./tsconfig.base.json"] },
      extends: [
        "plugin:@nx/typescript",
        "plugin:@typescript-eslint/stylistic-type-checked",
        "plugin:@typescript-eslint/recommended-type-checked",
      ],
      rules: {
        "@typescript-eslint/consistent-type-exports": "error",
        "@typescript-eslint/consistent-type-imports": "error",
      },
    },
    {
      files: ["*.js", "*.jsx"],
      extends: ["plugin:@nx/javascript"],
      rules: {},
    },
    {
      files: ["*.tsx", "*.jsx"],
      rules: {
        "react/jsx-sort-props": [
          "error",
          {
            callbacksLast: true,
            reservedFirst: true,
          },
        ],
      },
    },
  ],
};
