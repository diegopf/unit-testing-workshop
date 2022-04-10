<template>
  <div>
    <h1 data-test="title">{{ post.title }}</h1>
    <h2 data-test="body">{{ post.body }}</h2>
  </div>
</template>
<script lang="ts">
import { Prop, Vue, Component } from "vue-property-decorator";
import { Post } from "../blog.service";

@Component
export default class BlogPost extends Vue {
  @Prop()
  post!: Post;
}
</script>
