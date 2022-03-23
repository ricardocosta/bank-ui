module.exports = {
  "**/*.{ts,mts,tsx,js,jsx,json,css}": [
    "prettier --write",
    "eslint --ext .js,.jsx,.ts,.tsx,.mts",
    "bash -c 'tsc --no-emit -p tsconfig.json",
  ],
  "**/*.json": ["prettier --write"],
};
