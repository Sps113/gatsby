const path = require(`path`)
const fs = require(`fs`)
const React = require(`react`)
const { renderToStaticMarkup } = require(`react-dom/server`)
const Html = require(`./page`) // the HTML template
module.exports = function renderPage(template, pagePath, props) {
  const htmlContent = renderToStaticMarkup(
    <Html>{React.createElement(require(path.resolve(template)), props)}</Html>
  )
  fs.writeFileSync(path.join(`public`, pagePath), htmlContent, `utf8`)
}
