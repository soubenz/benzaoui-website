<template>
  <v-navigation-drawer
    app
    :value="value"
    clipped
    :mini-variant="miniVariant"
    color="amber lighten-1"
  >
    <v-list dense class="amber" shaped>
      <template v-for="(item, i) in items">
        <v-row v-if="item.heading" :key="i" align="center">
          <v-col cols="6">
            <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
          </v-col>
          <!-- <v-col cols="6" class="text-right">
              <v-btn small text>edit</v-btn>
            </v-col> -->
        </v-row>
        <v-divider v-else-if="item.divider" :key="i" dark class="my-4" />

        <v-list-item
          v-else
          :key="i"
          link
          :to="item.to"
          :href="item.href"
          :disabled="!item.activated"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="black--text">{{
              item.text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    value: { type: Boolean, required: false },
    miniVariant: Boolean,
  },

  data() {
    return {
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
        {
          icon: "domain",
          text: "Career Path",
          to: "/career/",
          activated: true,
        },
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
        { icon: "email", text: "Email me", to: "/contact/", activated: true },
      ],
    };
  },
  mounted() {},

  computed: {},
};
</script>

<style></style>
