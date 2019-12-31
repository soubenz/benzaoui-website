// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
// import ax from "src/ax";
const axios = require('axios')
// module.exports = function (api) {
//   api.loadSource(({
//     addCollection
//   }) => {
//     // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
//   })
const path = require('path');
module.exports = function (api) {

  api.loadSource(async actions => {
    const {
      data
    } = await axios.get(process.env.DATA_API_URL + '/generator/quotes')

    const quotes = actions.addCollection('Quotes')
    const series = actions.addCollection('Series')


    for (let item of data) {
      const tvseries = series.addNode({
        id: item.id,
        title: item.title,
        quotes: item.quotes,
        genre: item.genre,
        year: item.year
        // quotes: actions.store.createReference(allQuotes)

      })
      item.quotes.forEach(quote => {
        quotes.addNode({
          // id: quote.image.slice(-25, -5),
          image: path.resolve(quote.image),
          id: quote.text.slice(0, 30),
          character: quote.character,
          series: actions.store.createReference(tvseries),
          text: quote.text
        })

      });



    }
  })
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
}