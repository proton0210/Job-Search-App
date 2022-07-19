<template>
  <div>
    <main-nav />
    <router-view />
  </div>

  <!-- router-view is a special element that is used to render the current route 
  with the element/component/page -->
</template>

<script>
import MainNav from "@/components/Navigation/MainNav.vue";
export default {
  name: "App",
  components: {
    MainNav,
  },
};
</script>
