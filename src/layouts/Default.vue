<template>
  <div>
    <div class="nav">
       <g-link class="heading-link" :to="{ name: 'home' }">
        <component :is="titleTag" class="heading">{{ config.siteName }}</component>
      </g-link>
  </div>
  <div class="layout container px-6 lg:px-48">
    <header class="header">

    </header>
    <slot/>
  </div>
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
.nav{
  width: 100%;
  background-color: lightskyblue;
  padding: 20px 0;
  position: sticky;
  top: 0;
  z-index: 99;
}
</style>
