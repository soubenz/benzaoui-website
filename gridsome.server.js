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
          whitelist: [/^vuetify/],
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

    data.allStoryblokEntry.edges.forEach(({ node }) => {
      if (node.content.component == "project") {
        createPage({
          path: `/project/${node.full_slug}`,
          component: "./src/templates/Projects.vue",
          context: {
            id: node.id,
          },
        });
      }
      if (node.content.component == "blog") {
        createPage({
          path: `/blog/${node.full_slug}`,
          component: "./src/templates/StoryblokEntry.vue",
          context: {
            id: node.id,
          },
        });
      }
    });
  });
};

// /* configure faunaDB Client with our secret */
// const q = faunadb.query
// const client = new faunadb.Client({
//     secret: process.env.FAUNADB_SECRET
// })
// module.exports = function (api) {
//     api.createPages(async ({
//         graphql,
//         createPage
//     }) => {
//         const {
//             data
//         } = await graphql(`{
//       allStoryblokEntry {
//         edges {
//           node {
//             id
//             full_slug
//           }
//         }
//       }
//     }`)

//         data.allStoryblokEntry.edges.forEach(({
//             node
//         }) => {
//             createPage({
//                 path: `/${node.full_slug}`,
//                 component: './src/templates/StoryblokEntry.vue',
//                 context: {
//                     id: node.id
//                 }
//             })
//         })
//     })
// }
// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
// import ax from "src/ax";
// const axios = require('axios')
// module.exports = function (api) {
//   api.loadSource(({
//     const posts = actions.addCollection({
//         typeName: 'Project'
//     })
//     client.query(q.Get())
//     posts.addNode({
//         name: 'My first blog post',

//     })
//   }) => {
// Use the Data Store API here: https://gridsome.org/docs/data-store-api/
// //   })
// const path = require('path');
// module.exports = function (api) {

//   api.loadSource(async actions => {
//     const {
//       data
//     } = await axios.get(process.env.DATA_API_URL + '/generator/quotes')

//     const quotes = actions.addCollection('Quotes')
//     const series = actions.addCollection('Series')

//     for (let item of data) {
//       const tvseries = series.addNode({
//         id: item.id,
//         title: item.title,
//         quotes: item.quotes,
//         genre: item.genre,
//         year: item.year
//         // quotes: actions.store.createReference(allQuotes)

//       })
//       item.quotes.forEach(quote => {
//         quotes.addNode({
//           // id: quote.image.slice(-25, -5),
//           image: path.resolve(quote.image),
//           id: quote.text.slice(0, 30),
//           character: quote.character,
//           series: actions.store.createReference(tvseries),
//           text: quote.text
//         })

//       });

//     }
//   })
// api.createPages(async ({
//   graphql,
//   createPage
// }) => {
//   const {
//     data
//   } = await graphql(`{
//     allKitInfluencers {
//       edges {
//         node {
//           id
//           title
//         }
//       }
//     }
//   }`)

//   data.allKitInfluencers.edges.forEach(({
//     node
//   }) => {
//     createPage({
//       path: `/test/${node.title}`,
//       component: './src/templates/KitInfluencers.vue',
//       context: {
//         id: node.id
//       }
//     })
//   })
// })

// api.createPages(({
//   createPage
// }) => {
//   createPage({
//     path: '/my-page',
//     component: './src/templates/KitInfluencer.vue'
//   })
//   // Use the Pages API here: https://gridsome.org/docs/pages-api/
// })
// }
