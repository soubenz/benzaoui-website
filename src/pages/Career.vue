<template>
  <layout page-title="Career Path">
    <v-timeline>
      <v-timeline-item
        v-for="node in filteredEntries"
        :key="node.node.id"
        color="amber"
        small
      >
        <template v-slot:opposite>
          <span
            class="headline font-weight-bold"
            v-text="node.node.content.year"
          ></span>
        </template>
        <div class="py-4">
          <h2 class="headline font-weight-light mb-4 ">
            {{ node.node.content.title }}
          </h2>
          <div>{{ node.node.content.desc }}</div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </layout>
</template>
<page-query>
query {
  career: allStoryblokEntry {
    edges {
      node {
        id
        #items {type text id href} 
        name
        full_slug
        content
       
				        
      }
    }
  }
}
</page-query>
<script>
export default {
  computed: {
    filteredEntries() {
      return this.$page.career.edges.filter(
        (edge) => edge.node.content.component == "career"
      );
    },
  },
};
</script>
