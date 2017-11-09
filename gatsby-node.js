const _ = require("lodash");
const Promise = require("bluebird");
const path = require("path");

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve("./src/templates/blog-post.js");
    const categoryPage = path.resolve("./src/templates/category-page.js");
    resolve(
      graphql(
        `
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              frontmatter {
                path
                category
              }
            }
          }
        }
      }
    `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors); // eslint-disable-line no-console
          reject(result.errors);
        }

        const categorySet = new Set();

        // Create blog posts pages.
        _.each(result.data.allMarkdownRemark.edges, edge => {
          // Add the post to categories
          if (edge.node.frontmatter.category) {
            categorySet.add(edge.node.frontmatter.category);
          }
          createPage({
            path: edge.node.frontmatter.path,
            component: blogPost,
            context: {
              path: edge.node.frontmatter.path,
            },
          });
        });

        // Now create the category pages
        const categoryList = Array.from(categorySet);
        categoryList.forEach(category => {
          createPage({
            path: `/topic/${_.kebabCase(category.toLowerCase())}/`,
            component: categoryPage,
            context: {
              category
            }
          });
        });

      })
    );
  });
};
