<template>
  <div id="app">
    <!--<router-view/>-->

    <!-- <router-view /> -->
    <Header />
    <ListOfComponent />
  </div>
</template>

<style lang="scss">
@import "./styles/main";
</style>
<script>
import ListOfComponent from "@/components/organisms/ListOfComponent.vue";
import Header from "@/components/molecules/Header.vue";
export default {
  name: "App",
  components: {
    ListOfComponent,
    Header
  },
  created(){
  },
  data(){
    return{
      sections :  [
            { "name": 'Performance', "anchor": '#DXP', "id": 'navigation--section-nav-performance' },
            { "name": 'Availability', "anchor": '#ABOUT', "id": 'navigation--section-nav-availability' },
            { "name": 'Security', "anchor": '#CASES', "id": 'navigation--section-nav-security' },
            { "name": 'Scalability', "anchor": '#ENGAGEMENT', "id": 'navigation--section-nav-scalability' },
            { "name": 'Management', "anchor": '#TEAM', "id": 'navigation--section-nav-management' },
            { "name": 'Business intelligence', "anchor": '#row_business_intelligence', "id": 'navigation--section-nav-business_intelligence' },
        ]
    }
  }
};
</script>
