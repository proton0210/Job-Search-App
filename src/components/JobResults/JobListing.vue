<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <job-list-item />
      <job-list-item />
      <job-list-item />
    </ol>
  </main>
</template>

<script>
import JobListItem from "@/components/JobResults/JobListItem.vue";
export default {
  name: "JobListing",
  components: {
    JobListItem,
  },
};
</script>

<style></style>
