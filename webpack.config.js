const path = require("path")

module.exports = {
  entry: "./src/templates/page.js",
  output: {
    filename: "main-bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
}
