module.exports = {
  "**/*.{ts,mts,tsx,js,jsx,css}": [
    "nx affected --target=formatDry --parallel=3 --base=main --head=HEAD",
    "nx affected --target=lint --parallel=3 --base=main --head=HEAD",
    "nx affected --target=ts --parallel=3 --base=main --head=HEAD",
  ],
  "**/*.{json}": ["nx affected --target=formatDry --parallel=3 --base=main --head=HEAD"],
};
