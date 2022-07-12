import SubNav from "@/components/SubNav.vue";
import { mount } from "@vue/test-utils";

describe("SubNav.vue", () => {
  describe("when user is on jobs page", () => {
    it("displays job count", () => {
      const wrapper = mount(SubNav, {
        data() {
          return {
            onJobsResultPage: true,
          };
        },
      });
      const JobCount = wrapper.find("[data-test='job-count']");
      expect(JobCount.exists()).toBe(true);
    });
  });

  describe("When user is NOT on job page", () => {
    it("does not display job count", () => {
      const wrapper = mount(SubNav, {
        data() {
          return {
            onJobsResultPage: false,
          };
        },
      });
      const JobCount = wrapper.find("[data-test='job-count']");
      expect(JobCount.exists()).toBe(false);
    });
  });
});
