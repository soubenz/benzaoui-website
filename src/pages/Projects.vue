<template>
  <layout page-title="My Projects">
    <!-- <v-row justify-center>{{$page.projects.edges[1].node}}</v-row> -->
    <v-row>
      <v-col v-for="(edge, i) in filteredEntries" :key="i" cols="4">
        <v-card min-height="350" shaped>
          <!-- <v-img
            class="white--text align-end"
            height="300px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          ></v-img>-->

          <v-card-title class="headline" v-text="edge.node.content.title"></v-card-title>
          <v-card-text class="text--primary">
            <div>{{edge.node.content.desc}}</div>
            <v-chip
              class="ma-2"
              color="amber darken-1"
              large
              v-for="(tech, i) in edge.node.content.techs.split(',')"
              :key="i"
            >
              <v-icon left>{{setIcon(tech)}}</v-icon>
              {{tech}}
            </v-chip>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="amber" :href="edge.node.content.url">Preview</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </layout>
</template>
<page-query>
query {
  projects: allStoryblokEntry {
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
  data: () => ({
    colors: ["indigo", "warning"],
    slides: ["First", "Second"]
  }),
  computed: {
    filteredEntries() {
      return this.$page.projects.edges.filter(
        edge => edge.node.content.component == "project"
      );
    }
  },
  methods: {
    setIcon(tech) {
      switch (tech.toLowerCase().trim()) {
        case "python":
          return "mdi-language-python";
        case "vuejs":
          return "mdi-vuejs";
        case "lua":
          return "mdi-language-lua";
        case "c++":
          return "mdi-language-cpp";
        case "seo":
          return "mdi-lighthouse-on";
        default:
          break;
      }
    }
  }
};
</script>
