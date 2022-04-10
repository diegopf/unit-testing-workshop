<template>
  <div id="app">
    <Blog />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Blog from "./components/Blog.vue";

@Component({
  components: {
    Blog,
  },
})
export default class App extends Vue {}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
