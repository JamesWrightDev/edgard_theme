<template>
  <div class="layout container">
    <header class="header">
      <g-link class="heading-link" :to="{ name: 'home' }">
        <component :is="titleTag" class="heading">{{ config.siteName }}</component>
      </g-link>
    </header>
    <slot/>
  </div>
</template>

<script>
import config from '~/.temp/config.js';

export default {
  computed: {
    titleTag () {
      return this.$route.name === 'home' ? 'h1' : 'h6'
    },
    config () {
      return config
    }
  }
}
</script>


<style lang="css">
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @media (min-width: 1024px) {
       @apply bg-gray-200;

    }
}
</style>
