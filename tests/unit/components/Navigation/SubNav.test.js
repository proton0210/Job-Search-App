import SubNav from "@/components/Navigation/SubNav.vue";
import { mount } from "@vue/test-utils";

// replacing mount with mount to test the component without the sub-components
describe("SubNav.vue", () => {
  const createConfig = (routeName) => ({
    global: {
      mocks: {
        $route: {
          name: routeName,
        },
      },
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });
  //implicit return of an object
  describe("when user is on jobs page", () => {
    it("displays job count", () => {
      const routeName = "JobResults";

      const wrapper = mount(SubNav, createConfig(routeName));

      const JobCount = wrapper.find("[data-test='job-count']");
      expect(JobCount.exists()).toBe(true);
    });
  });

  describe("When user is NOT on job page", () => {
    it("does not display job count", () => {
      const routeName = "home";

      const wrapper = mount(SubNav, createConfig(routeName));

      const JobCount = wrapper.find("[data-test='job-count']");
      expect(JobCount.exists()).toBe(false);
    });
  });
});
