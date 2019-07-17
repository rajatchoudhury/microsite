<template>
  <h1 :class="color + ' card__title'">{{ title }}</h1>
</template>

<style>
    
</style>

<script>
export default {
    name: 'AppCardTitle',
    props:{
        title:{
            type: String,
            default: 'Title'
        },
        color:{
            type: String,
            default: 'white'
        }
    }
}
</script>

