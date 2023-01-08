module.exports = {
  ignorePatterns: ["!**/*"],
  plugins: ["react", "@typescript-eslint", "testing-library"],
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:testing-library/react",
    "plugin:react/jsx-runtime",
    "../../.eslintrc.js",
  ],
  overrides: [
    {
      files: ["*.ts", "*.js", "*.tsx", "*.jsx"],
      rules: {},
    },
    {
      files: ["*.ts", "*.js", "*.tsx", "*.jsx"],
      rules: {},
    },
    {
      files: ["*.ts", "*.js", "*.tsx", "*.jsx"],
      rules: {},
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
