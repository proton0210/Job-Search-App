<template>
  <div class="flex w-full flex-row-nowrap">
    <job-filter-side-bar />
    <job-listing />
  </div>
</template>

<script>
import JobFilterSideBar from "@/components/JobResults/JobFilterSideBar/JobFilterSideBar.vue";
import JobListing from "@/components/JobResults/JobListing.vue";
export default {
  name: "JobResultsView",
  components: {
    JobFilterSideBar,
    JobListing,
  },
  methods: {
    goToHome() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>
