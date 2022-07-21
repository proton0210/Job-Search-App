import JobListItem from "@/components/JobResults/JobListItem.vue";
import { mount, RouterLinkStub } from "@vue/test-utils";

describe("JobListItem.vue", () => {
  it("renders job title", () => {
    const wrapper = mount(JobListItem, {
      global: {
        stubs: {
          "router-link": RouterLinkStub,
        },
      },
      props: {
        job: {
          title: "Vue Developer",
        },
      },
    });

    expect(wrapper.text()).toMatch("Vue Developer");
  });

    it("renders job Organization", () => {
      const wrapper = mount(JobListItem, {
        global: {
          stubs: {
            "router-link": RouterLinkStub,
          },
        },
        props: {
          job: {
            title: "AirBnB",
          },
        },
      });

      expect(wrapper.text()).toMatch("AirBnB");
    });
});
