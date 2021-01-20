<template>
  <layout>
    <v-card>
      <div>{{$page.storyblokEntry.id}}</div>
      <div>{{$page.storyblokEntry.content.title}}</div>
      <v-btn block>sds</v-btn>
    </v-card>
  </layout>
</template>

<page-query>
query StoryblokEntry ($id: ID) {
  storyblokEntry (id: $id) {
    id
    slug
    content
  }
}
</page-query