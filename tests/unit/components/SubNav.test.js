import SubNav from "@/components/SubNav.vue";
import { shallowMount } from "@vue/test-utils";

// replacing mount with shallowMount to test the component without the sub-components
describe("SubNav.vue", () => {
  describe("when user is on jobs page", () => {
    it("displays job count", () => {
      const wrapper = shallowMount(SubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
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
      const wrapper = shallowMount(SubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
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
