<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <job-list-item v-for="job in jobs" :key="job.id" :job="job" />
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
  async mounted() {
    const { data } = await axios.get("http://localhost:3000/jobs");
    this.jobs = data;
  },
};
</script>

<style></style>
