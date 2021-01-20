<template>
  <layout page-title="My Projects">
    <!-- <v-row justify-center>{{$page.projects.edges[1].node}}</v-row> -->
    <v-row>
      <v-col v-for="edge in filteredEntries" :key="edge.id" sm="4">
        <v-card class="d-flex align-center flex-column" height="100%" shaped>
          <g-image
            class="d-flex"
            :src="
              require(`!!assets-loader?fit=fill!@images/projects/${
                edge.node.content.image
              }.png`)
            "
          />

          <v-card-title
            class="headline"
            v-text="edge.node.content.title"
          ></v-card-title>
          <v-card-text>
            <v-row>
              <div class="mb-2">
                {{ edge.node.content.desc }}
              </div></v-row
            >
            <v-row
              ><v-chip
                class=" ma-1"
                dark
                color="grey darken-3"
                v-for="(tech, i) in edge.node.content.techs.split(',')"
                :key="i"
              >
                <!-- <v-icon left>{{setIcon(tech)}}</v-icon> -->
                {{ tech }}
              </v-chip></v-row
            >
          </v-card-text>
          <v-card-actions class="mt-auto d-flex align-self-end ">
            <v-btn color="amber" rounded :href="edge.node.content.url"
              >Preview</v-btn
            >
            <v-btn color="amber" rounded :href="edge.node.content.source"
              >Source</v-btn
            >
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
    slides: ["First", "Second"],
  }),
  computed: {
    filteredEntries() {
      return this.$page.projects.edges.filter(
        (edge) => edge.node.content.component == "project"
      );
    },
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
    },
  },
};
</script>
<style>
.flexcard {
  display: flex;
  flex-direction: column;
}
.flexcard .v-toolbar {
  flex: 0;
}
</style>
