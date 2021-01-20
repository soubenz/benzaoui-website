// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Soufiane Benzaoui's Website",
  siteUrl: "https://benzaoui.dev",
  chainWebpack: (config) => {
    config.resolve.alias.set("@images", "@/assets/images");
  },
  plugins: [
    {
      use: "gridsome-source-storyblok",
      options: {
        client: {
          accessToken: process.env.STORYBLOK_TOKEN,
        },
        version: "draft",
      },
    },
  ],
};
