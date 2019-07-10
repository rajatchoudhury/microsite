<template>
  <a v-if="isNewWindow" :class="className" :href="path" target="_blank">{{ label }}</a>
  <router-link v-else :class="className" :to="path">{{ label }}</router-link>
</template>

<script>
export default {
  name: "AppLink",
  data() {
    return {};
  },
  props: {
    label: String,
    path: String,
    className: String,
    isNewWindow: {
      type: Boolean,
      default: false
    }
  }
};
</script>
