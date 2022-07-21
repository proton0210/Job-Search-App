<template>
  <form
    class="flex items-center w-full h-12 border border-solid border-brand-gray-3 rounded-3xl mt-14"
    @submit.prevent="searchForJobs"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
    <div class="flex flex-1 h-full text-base font-light flex-nowrap">
      <div class="relative flex h-full pr-3 items-center-flex-1">
        <label class="absolute left-0 -top-10">Role</label>
        <text-input
          v-model="role"
          placeholder="Software Engineer"
          data-test="role-input"
        />
      </div>
      <span
        class="flex items-center h-full px-3 border-l border-r border-gray-3 bg-brand-gray-2"
        >in</span
      >
      <div class="relative flex h-full pl-3 items-center-1">
        <label class="absolute left-0 -top-10">Where?</label>
        <text-input
          v-model="location"
          placeholder="Mumbai,India"
          data-test="location-input"
        />
      </div>
    </div>
    <action-button
      text="Search"
      type="secondary"
      class="rounded-r-3xl"
      data-test="form-submit-button"
    />
  </form>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import TextInput from "@/components/Shared/TextInput.vue";
export default {
  name: "JobSearchForm",
  components: {
    ActionButton,
    TextInput,
  },
  data() {
    return {
      role: "",
      location: "",
    };
  },

  methods: {
    updateRole(payload) {
      this.role = payload; // use this way
    },
    searchForJobs() {
      this.$router.push({
        name: "JobResults",
        query: { role: this.role, location: this.location },
        // http://localhost:8080/#/jobs/results?role=Vue+devleoper&location=Mumbai
      });
    },
  },
};
</script>

<style scoped></style>
