import ActionButton from "@/components/ActionButton.vue";
import { mount } from "@vue/test-utils";

describe("ActionButton.vue", () => {
  it("renders text", () => {
    const wrapper = mount(ActionButton, {
      propsData: {
        text: "test",
        type: "primary",
      },
    });
    expect(wrapper.text()).toMatch("test");
  });

  it("applies one or more classes correctly", () => {
    const wrapper = mount(ActionButton, {
      propsData: {
        text: "test",
        type: "primary",
      },
    });
    expect(wrapper.classes()).toContain("primary");
  });
});
