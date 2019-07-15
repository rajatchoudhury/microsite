<template>
  <div id="app">
    <!--<router-view/>-->
    <SliderBanner />
  </div>
</template>

<style lang="scss">
@import "./styles/main";
</style>
<script>
import SliderBanner from "@/components/SliderBanner.vue";
export default {
  name: "App",
  components: {
    SliderBanner
  }
};
</script>
