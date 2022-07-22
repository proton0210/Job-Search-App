import JobListItem from "@/components/JobResults/JobListItem.vue";
import { mount, RouterLinkStub } from "@vue/test-utils";

describe("JobListItem.vue", () => {
  const createJobProps = (jobProps = {}) => ({
    title: "Vue Developer",
    organization: "AirBnB",
    ...jobProps,
  });

  const createConfig = (jobProps) => ({
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
    props: {
      job: createJobProps(jobProps),
    },
  });

  it("renders job title", () => {
    const wrapper = mount(JobListItem, createConfig());

    expect(wrapper.text()).toMatch("Vue Developer");
  });

  it("renders job Organization", () => {
    const wrapper = mount(JobListItem, createConfig());

    expect(wrapper.text()).toMatch("AirBnB");
  });

  it("renders job locations", () => {
    const wrapper = mount(
      JobListItem,
      createConfig({ locations: ["New York", "San Francisco"] }),
    );

    expect(wrapper.text()).toMatch("New York");
    expect(wrapper.text()).toMatch("San Francisco");
  });

  it("renders job qualifications", () => {
    const wrapper = mount(
      JobListItem,
      createConfig({ minimumQualifications: ["JavaScript", "Vue"] }),
    );

    expect(wrapper.text()).toMatch("JavaScript");
    expect(wrapper.text()).toMatch("Vue");
  });

  it("Links ro individual Job's page", () => {
    const wrapper = mount(JobListItem, createConfig({ id: 15 }));
    const jobPageLink = wrapper.findComponent(RouterLinkStub);
    const toProp = jobPageLink.props("to");
    expect(toProp).toBe("/jobs/results/15");
  });
});
