<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/job/results">Job results</router-link>
  </div>

  <router-view />
  <!-- router-view is a special element that is used to render the current route 
  with the element/component/page -->
</template>

<script>
export default {
  name: "App",
};
</script>
