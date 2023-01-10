module.exports = {
  ignorePatterns: ["!**/*"],
  plugins: ["react", "@typescript-eslint", "testing-library"],
  extends: [
    "../../.eslintrc.js",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:testing-library/react",
    "plugin:react/jsx-runtime",
  ],
  overrides: [
    {
      files: ["*.ts", "*.js", "*.tsx", "*.jsx"],
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
  settings: {
    react: {
      version: "detect",
    },
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
};
