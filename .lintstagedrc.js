module.exports = {
  "**/*.*": ["nx affected --target=validateDry --parallel=3 --base=main --head=HEAD"],
};
