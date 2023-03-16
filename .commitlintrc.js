const MAX_BODY_LINE_LENGTH = 100;

const lineLengthValidator = (arg) => {
  const urlRegex = /https?:\/\//gi;
  const linesAboveLimit = (arg ?? "")
    .split("\n")
    .filter((line) => line.length > MAX_BODY_LINE_LENGTH);

  return [
    linesAboveLimit.every((line) => line.match(urlRegex)) ? 2 : 0,
    `Commit message contains lines above the ${MAX_BODY_LINE_LENGTH} characters limit.`,
  ];
};

module.exports = {
  extends: ["@commitlint/config-conventional", "@commitlint/config-nx-scopes"],
  rules: {
    "subject-case": [2, "always", "sentence-case"],
    "body-max-line-length": [2, "always", 100],
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
  plugins: [
    {
      rules: {
        "body-max-line-length": ({ body }) => lineLengthValidator(body),
        "footer-max-line-length": ({ footer }) => lineLengthValidator(footer),
      },
    },
  ],
};
