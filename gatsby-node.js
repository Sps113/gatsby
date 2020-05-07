/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `ContentfulPage` && node.slug) {
    console.log(node, getNode, actions)
    // const slug = createFilePath({ node, getNode  })

    createNodeField({
      node,
      name: `slug`,
      value: node.slug,

    })
  }
}
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const path = require('path')
  const result = await graphql(`
    query {
      allContentfulPage {
        edges {
          node {
            slug
            h1
            title
            seoText {
              seoText
            }
            internal {
              type
            }
          }
        }
      }
    }
  `)
  result.data.allContentfulPage.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/page.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        node: node,
      },
    })
  })
}
