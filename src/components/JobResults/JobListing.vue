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
import axios from "axios";

export default {
  name: "JobListing",

  components: {
    JobListItem,
  },
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    axios.get("http://localhost:3000/jobs").then((response) => {
      this.jobs = response.data;
    });
  },
};
</script>

<style></style>
