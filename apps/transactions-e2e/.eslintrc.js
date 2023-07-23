module.exports = {
  extends: ["../../.eslintrc.js"],
  rules: {
    "@nx/enforce-module-boundaries": [
      "error",
      {
        allow: ["@ricardocosta/apps/transactions/**"],
      },
    ],
  },
};
