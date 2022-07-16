<template>
  <div>
    <main-nav />
    <hero />
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import MainNav from "@/components/MainNav.vue";
export default {
  name: "App",
  components: {
    MainNav,
    Hero,
  },
};
</script>
