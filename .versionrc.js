module.exports = {
  types: [
    { type: "feat", section: "✨ Features" },
    { type: "fix", section: "🐛 Fixes" },
    { type: "chore", section: "🔧 Chores" },
    { type: "docs", section: "📖 Documentation" },
    { type: "style", section: "🎨 UI" },
    { type: "refactor", hidden: true },
    { type: "perf", hidden: true },
    { type: "test", hidden: true },
    { type: "build", hidden: true },
    { type: "ci", hidden: true },
    { type: "revert", hidden: true },
  ],
  // Using "!" to avoid detecting references to issues
  // and having the changelog polluted with "closes"
  issuePrefixes: ["!"],
};
