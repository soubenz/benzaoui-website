<template>
  <Layout>
    <h1 class="title has-text-centered">TV Series Quotes</h1>
    <b-carousel>
      <b-carousel-item v-for="(edge, i) in sample" :key="i">
        <div class="hero is-medium">
          <div class="hero-body has-text-centered">
            <figure class="image is-16by9">
              <g-image :src="edge.node.image.src" :alt="edge.node.text" />
            </figure>
          </div>
        </div>
      </b-carousel-item>
    </b-carousel>
    <div class="columns is-multiline">
      <span
        class="card column is-one-quarter has-margin-50"
        v-for="edge in sortData"
        :key="edge.node.id"
      >
        <g-link class="card-content has-text-centered" :to="getLink(edge.node.id)">
          <p class="title">{{edge.node.title}}</p>
        </g-link>
      </span>
    </div>
    <!-- <p class="home-links">
        <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
        <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>-->
  </Layout>

  <!-- <div class="container"> -->

  <!-- </div>
  </section>-->
</template>
<page-query>
query {
  series: allSeries {
    edges {
      node {
        id
        title
        
      }
    }
  }
  quotes: allQuotes { 
    edges {
      node {
        image
        text


  }
}}
}
</page-query>

<script>
import "bulma-helpers/css/bulma-helpers.css";
export default {
  metaInfo: {
    title: "TV Series Quotes"
  },
  data() {
    return {
      carousels: [
        { text: "Slide 1", color: "primary" },
        { text: "Slide 2", color: "info" },
        { text: "Slide 3", color: "success" },
        { text: "Slide 4", color: "warning" },
        { text: "Slide 5", color: "danger" }
      ]
    };
  },
  computed: {
    sortData() {
      const sortedData = this.$page.series.edges.sort((a, b) =>
        a.node.id > b.node.id ? 1 : -1
      );
      return sortedData;
    },
    sample() {
      // let RandomData = this.$page.quotes.edges[
      // Math.floor(Math.random() * this.$page.quotes.edges.length)
      // ];
      let count = 5;
      let _arr = [...this.$page.quotes.edges];
      return [...Array(count)].map(
        () => _arr.splice(Math.floor(Math.random() * _arr.length), 1)[0]
      );
    }
  },

  methods: {
    getLink(id) {
      //   let imageUrl = "/images/0a07c859915761d54cf049a1c771873a30d3b563";
      let url = "/series/" + id + "/";
      return url;
    },
    lowerCase(stringToLower) {
      let title = stringToLower.toLowerCase();
      return title;
    }
  }
};
</script>

<style>
/* 
*:not(path) {
  color: hsla(210, 100%, 100%, 0.9) !important;
  background: hsla(210, 100%, 50%, 0.5) !important;
  outline: solid 0.25rem hsla(210, 100%, 100%, 0.5) !important;

  box-shadow: none !important;
} */
</style>
