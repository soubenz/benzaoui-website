<template>
  <v-app id="keep">
    <v-app-bar app clipped-left color="amber">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <span class="title ml-3 mr-5">
        Benzaoui&nbsp;
        <span class="font-weight-light">Soufiane</span>
      </span>
      <!-- <v-text-field solo-inverted flat hide-details label="Search" prepend-inner-icon="search" /> -->

      <v-spacer />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped color="amber lighten-1">
      <v-list dense class="amber">
        <template v-for="(item, i) in items">
          <v-row v-if="item.heading" :key="i" align="center">
            <v-col cols="6">
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-col>
            <v-col cols="6" class="text-right">
              <v-btn small text>edit</v-btn>
            </v-col>
          </v-row>
          <v-divider v-else-if="item.divider" :key="i" dark class="my-4" />
          <v-list-item v-else :key="i" link>
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="black--text">{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container fluid class="grey lighten-4">
        <slot />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    items: [
      { icon: "lightbulb_outline", text: "Projects", to: "" },
      { icon: "mdi-blogger", text: "Blog", to: "" },
      // { divider: true },
      // { heading: "Labels" },
      { icon: "mdi-code-tags", text: "Code Snippets", to: "" },
      // { icon: "chat_bubble", text: "Contact", to: "" },
      { icon: "mdi-linkedin", text: "My Linkedin", to: "" },
      { icon: "mdi-microsoft-github", text: "Github", to: "" },
      { icon: "email", text: "Email me", to: "" }

      // { divider: true },
      // { icon: "archive", text: "Archive" },
      // { icon: "delete", text: "Trash" },
      // { divider: true },
      // { icon: "settings", text: "Settings" },
      // { icon: "chat_bubble", text: "Trash" },
      // { icon: "help", text: "Help" },
      // { icon: "phonelink", text: "App downloads" },
      // { icon: "keyboard", text: "Keyboard shortcuts" }
    ]
  })
};
</script>

<style>
#keep .v-navigation-drawer__border {
  display: none;
}
</style>