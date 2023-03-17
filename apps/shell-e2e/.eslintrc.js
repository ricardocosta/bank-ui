module.exports = {
  extends: ["../../.eslintrc.js"],
  ignorePatterns: ["!**/*"],
  rules: {
    "@nrwl/nx/enforce-module-boundaries": [
      "error",
      {
        allow: ["@ricardocosta/apps/shell/**"],
      },
    ],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
      rules: {},
    },
    {
      files: ["*.ts", "*.tsx"],
      rules: {},
    },
    {
      files: ["*.js", "*.jsx"],
      rules: {},
    },
  ],
};
