<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-span-1 cols-start-1"></div>
        <div class="col-span-5 cols-start-2">
          <head-line-vue />
          <job-search-form />
        </div>
        <div class="self-center col-span-5 cols-start-7 justify-self-center">
          <img
            class="object-contain w-80 h-80"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
          />
        </div>
        <div class="col-span-1 cols-start-12"></div>
      </div>
    </section>
  </main>
</template>

<script>
import HeadLineVue from "@/components/HeadLine.vue";
import JobSearchForm from "@/components/JobSearchForm.vue";
export default {
  name: "Hero",
  components: {
    HeadLineVue,
    JobSearchForm,
  },
};
</script>

<style></style>
