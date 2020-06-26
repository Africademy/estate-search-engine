const path = require(`path`)
const estate = require("./src/data/estates.json")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  estate.forEach(estate => {
    createPage({
      path: `/results/${estate.slug}`,
      component: path.resolve(`./src/components/template/template.jsx`),
      context: {
        state: estate,
      },
    })
  })
}
