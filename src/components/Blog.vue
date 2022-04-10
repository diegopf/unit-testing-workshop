<template>
  <div>
    <BlogPost v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { BlogService, Post } from "../blog.service";
import BlogPost from "./Blog-post.vue";

@Component({
  components: {
    BlogPost,
  },
})
export default class Blog extends Vue {
  posts: Post[] = [];
  async mounted() {
    this.posts = await BlogService.fetchPosts();
  }
}
</script>
