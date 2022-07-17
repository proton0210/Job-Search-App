<template>
  <div>
    <main-nav />
    <hero />
  </div>
</template>

<script>
import Hero from "@/components/JobSearch/Hero.vue";
import MainNav from "@/components/Navigation/MainNav.vue";
export default {
  name: "App",
  components: {
    MainNav,
    Hero,
  },
};
</script>
