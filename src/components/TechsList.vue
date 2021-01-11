<template>
  <v-row justify="center">
    <v-col cols="3" v-for="item in data" :key="item.node.id">
      <v-card>
        <!-- <v-col> -->
        <!-- https://github.com/gridsome/gridsome/issues/292 -->
        <div class="d-flex justify-center">
          <g-image
            :src="
              require(`!!assets-loader?width=150&height=150&fit=fill!@images/${
                item.node.content.image
              }.png`)
            "
          />
        </div>
        <v-card-title class="justify-center"
          >{{ item.node.content.title }}
        </v-card-title>
        <!-- </v-col> -->
      </v-card>
    </v-col>
  </v-row></template
>

<script>
export default {
  props: { data: Array },
};
</script>

<style></style>
