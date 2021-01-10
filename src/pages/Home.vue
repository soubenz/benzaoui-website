<template>
  <layout>
    <v-row justify="center">
      {{ frontendTechs }}
      <v-col cols="6">
        <lottie-animation path="../../data/it.json" />
      </v-col>
    </v-row>
    <v-row justify="center">
      <vue-typed-js
        class="ma-4"
        :loop="true"
        :showCursor="false"
        :fadeOut="false"
        :typeSpeed="50"
        :strings="['/Engineering', '/Cloud', '/Web', '/DevOps']"
      >
        <span class="display-3 typing amber--text text--darken-4"></span>
      </vue-typed-js>
    </v-row>
    <!-- <v-divider class="ma-4" /> -->

    <v-row justify="center">
      <v-col cols="10">
        <v-card elevation="10">
          <v-card-title class="text-center justify-center py-6">
            <h1 class=" text-h3">My ♥ Stack</h1>
          </v-card-title>
          <v-tabs v-model="tab" background-color="transparent" grow>
            <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item>
              <v-card v-for="item in devopsTechs" :key="item.node.id">
                <!-- https://github.com/gridsome/gridsome/issues/292 -->
                <g-image
                  class="responsive-image"
                  :src="
                    require(`!!assets-loader?width=250!@images/${
                      item.node.content.image
                    }.png`)
                  "
                />
                <v-card-title class="justify-center"
                  >{{ item.node.content.title }}
                </v-card-title>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card v-for="item in backendTechs" :key="item.node.id">
                <!-- https://github.com/gridsome/gridsome/issues/292 -->
                <g-image
                  class="responsive-image"
                  :src="
                    require(`!!assets-loader?width=250!@images/${
                      item.node.content.image
                    }.png`)
                  "
                />
                <v-card-title class="justify-center">{{
                  item.node.content.title
                }}</v-card-title>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card v-for="item in frontendTechs" :key="item.node.id">
                <!-- https://github.com/gridsome/gridsome/issues/292 -->
                <g-image
                  class="responsive-image"
                  :src="
                    require(`!!assets-loader?width=250!@images/${
                      item.node.content.image
                    }.png`)
                  "
                />
                <v-card-title class="justify-center"
                  >{{ item.node.content.title }}
                </v-card-title>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card v-for="item in cloudTechs" :key="item.node.id">
                <!-- https://github.com/gridsome/gridsome/issues/292 -->
                <g-image
                  class="responsive-image"
                  :src="
                    require(`!!assets-loader?width=250!@images/${
                      item.node.content.image
                    }.png`)
                  "
                />
                <v-card-title class="justify-center"
                  >{{ item.node.content.title }}
                </v-card-title>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
    <div>About me</div>

    <div>How I built this website?</div>
    <div>Skills</div>
  </layout>
</template>
<page-query>
query {
  stack: allStoryblokEntry {
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
// import VueTypedJs from "vue-typed-js";
export default {
  // components: { VueTypedJs },

  metaInfo: {
    title: "Home",
  },
  data: () => ({
    tab: null,
    items: ["DevOps", "Backend", "Frontend", "Cloud"],
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  }),
  computed: {
    frontendTechs() {
      return this.$page.stack.edges.filter(
        (edge) =>
          edge.node.content.component == "stack" &&
          edge.node.content.type == "frontend"
      );
    },
    backendTechs() {
      return this.$page.stack.edges.filter(
        (edge) =>
          edge.node.content.component == "stack" &&
          edge.node.content.type == "backend"
      );
    },
    devopsTechs() {
      return this.$page.stack.edges.filter(
        (edge) =>
          edge.node.content.component == "stack" &&
          edge.node.content.type == "devops"
      );
    },
    cloudTechs() {
      return this.$page.stack.edges.filter(
        (edge) =>
          edge.node.content.component == "stack" &&
          edge.node.content.type == "cloud"
      );
    },
  },
};
</script>
