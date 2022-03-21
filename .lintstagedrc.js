module.exports = {
  "**/*.{ts,tsx,js,jsx,json,css}": [
    "prettier --write",
    "eslint --ext .js,.jsx,.ts,.tsx",
    "bash -c 'tsc --no-emit -p tsconfig.json",
  ],
  "**/*.json": ["prettier --write"],
};
