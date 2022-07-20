<template>
  <div>Job Page {{ currentJobId }}</div>
</template>

<script>
export default {
  name: "Job View",
  computed: {
    currentJobId() {
      return this.$route.params.id;
    },
  },
};
</script>

<style></style>
