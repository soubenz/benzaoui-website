<template>
  <Layout>
    <h1 class="title">About the project</h1>
    <p class="has-margin-bottom-20">
      The idea came from a silly shower thought I had while I was thinking about
      the best tv series quotes all-time. The projects fuses two of the things I like:
      Tv series and Vue.js !
    </p>
    <h2 class="title">How I built it?</h2>
    <li>
      Scraping tv series' quotes from
      <b-tooltip label="Text is dashed" dashed>magicalquotes.com</b-tooltip>
    </li>

    <li>
      Build a simple API using
      <b-tooltip
        label="Hug is an API development micro-framework implemented in Python 3. It's simple yet powerful to build APIs for various use cases."
        dashed
      >Python's Hug</b-tooltip>&nbsp;that is used to load data into
      <b-tooltip
        label="GraphQL can be used to unify these existing systems and hide their complexity behind a nice GraphQL API."
        dashed
      >GraphQL data layer.</b-tooltip>
    </li>

    <li>
      Use
      <b-tooltip
        label="Gridsome is a free & open source Vue.js-powered framework for building websites & apps that are fast by default ."
        dashed
      >Gridsome</b-tooltip>&nbsp;and
      <b-tooltip
        label="Vue.js is an open-source Model–view–viewmodel JavaScript framework for building user interfaces and single-page applications"
        dashed
      >Vue.js</b-tooltip>&nbsp;to build the Static website
    </li>
    <li>
      Deploy on
      <b-tooltip
        label="Netlify is an All-in-one platform for automating modern web projects."
        dashed
      >Netlify</b-tooltip>
    </li>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About"
  }
};
</script>
