<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <job-list-item
        v-for="job in displayedJobs"
        :key="job.id"
        :job="job"
        data-test="job-listing"
      />
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
  computed: {
    displayedJobs() {
      const pageString = this.$route.query.page || "1";
      const pageNumber = Number.parseInt(pageString);
      const firstJobIndex = (pageNumber - 1) * 10;
      const lastJobIndex = pageNumber * 10;
      console.log(pageNumber, firstJobIndex, lastJobIndex);
      return this.jobs.slice(firstJobIndex, lastJobIndex);
    },
  },
  async mounted() {
    const response = await axios.get("http://localhost:3000/jobs");
    this.jobs = response.data;
  },
};
</script>

<style></style>
