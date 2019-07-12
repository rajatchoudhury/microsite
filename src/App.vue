<template>
    <div id="app">
      <!--<router-view/>-->
      <HelloWorld />
    </div>
</template>

<style lang="scss">
    @import "./styles/main";
</style>
<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
    name: "App",
    components:{
        HelloWorld
    }
}
</script>
