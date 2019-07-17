<template>
  <p :class="color + ' card__content'">{{ content }}</p>
</template>

<style>
    
</style>

<script>
export default {
    name: 'AppCardContent',
    props:{
        content:{
            type: String,
            default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        color:{
            type: String,
            default: 'white'
        }
    }
}
</script>

