<template>
  <v-app id="keep">
    <v-app-bar app clipped-left color="amber">
      <v-app-bar-nav-icon @click="drawer = !drawer" />

      <span class="title ml-3 mr-5">
        Benzaoui&nbsp;
        <span class="font-weight-light">Soufiane</span>
      </span>
      <v-spacer />
      <span class="headline font-weight-bold">{{ pageTitle }}</span>

      <!-- <v-text-field solo-inverted flat hide-details label="Search" prepend-inner-icon="search" /> -->

      <v-spacer /> </v-app-bar
    ><ClientOnly>
      <navigation-side-drawer
        v-model="drawer"
        :mini-variant="$vuetify.breakpoint.mobile"
    /></ClientOnly>
    <!-- <navigation-side-drawer v-model="drawer" :mini-variant="true" /> -->
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavigationSideDrawer from "@/components/NavigationSideDrawer";

export default {
  components: { NavigationSideDrawer },
  props: {
    pageTitle: String,
  },
  data: () => ({
    drawer: false,
    test: false,
    items: [
      { icon: "mdi-home-roof", text: "Home", to: "/", activated: true },
      {
        icon: "lightbulb_outline",
        text: "Projects",
        to: "/projects/",
        activated: true,
      },
      {
        icon: "mdi-blogger",
        text: "Blog",
        href: "https://soubenz.medium.com/",
        activated: true,
      },
      // { divider: true },
      // { heading: "Labels" },
      {
        icon: "mdi-code-tags",
        text: "Code Snippets",
        to: "/snippets/",
        activated: false,
      },
      { icon: "domain", text: "Career Path", to: "/career/", activated: true },
      // { icon: "chat_bubble", text: "Contact", to: "" },
      {
        icon: "mdi-linkedin",
        text: "My Linkedin",
        href: "https://www.linkedin.com/in/soufiane-benzaoui/",
        activated: true,
      },
      {
        icon: "mdi-xml",
        text: "Github",
        href: "https://github.com/soubenz",
        activated: true,
      },
      { icon: "email", text: "Email me", to: "/contact/", activated: false },
    ],
  }),
};
</script>

<style>
#keep .v-navigation-drawer__border {
  display: none;
}
</style>
