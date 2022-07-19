import HomeView from "@/views/HomeView.vue";
import JobResultsView from "@/views/JobResultsView.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/job/results",
    name: "JobResults",
    component: JobResultsView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
