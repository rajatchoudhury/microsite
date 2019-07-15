<template>
  <div id="app">
    <!-- <router-view /> -->
    <!-- <HelloWorld /> -->
    <NavBar />
  </div>
</template>

<style lang="scss">
@import "./styles/main";
</style>
<script>
import NavBar from "@/components/organisms/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>
