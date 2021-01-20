// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/
// import faunadb from 'faunadb' /* Import faunaDB sdk */
const nodeExternals = require("webpack-node-externals");
// const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");
module.exports = function(api) {
  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          allowlist: [/^vuetify/],
        }),
      ]);
    }
  });

  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`
      {
        allStoryblokEntry {
          edges {
            node {
              id
              full_slug
              content
            }
          }
        }
      }
    `);

    // data.allStoryblokEntry.edges.forEach(({ node }) => {
    //   if (node.content.component == "project") {
    //     createPage({
    //       path: `/project/${node.full_slug}`,
    //       component: "./src/templates/Projects.vue",
    //       context: {
    //         id: node.id,
    //       },
    //     });
    //   }
    //   if (node.content.component == "blog") {
    //     createPage({
    //       path: `/blog/${node.full_slug}`,
    //       component: "./src/templates/StoryblokEntry.vue",
    //       context: {
    //         id: node.id,
    //       },
    //     });
    //   }
    // });
  });
};
