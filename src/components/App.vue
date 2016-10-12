<script>
  import Navbar from './Navbar.vue'

  export default {
    name: "App",
    replace: false,
    components: {
      Navbar
    }
  }
</script>

<template>
  <navbar></navbar>
  <router-view></router-view>
</template>
