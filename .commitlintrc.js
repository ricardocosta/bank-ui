module.exports = {
  extends: ["@commitlint/config-conventional", "@commitlint/config-nx-scopes"],
  rules: {
    "subject-case": [2, "always", "sentence-case"],
    "body-max-line-length": [2, "always", 80],
    "type-enum": [
      2,
      "always",
      [
        "build",
        "ci",
        "chore",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
      ],
    ],
  },
};
