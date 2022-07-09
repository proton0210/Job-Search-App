import MainNav from "@/components/MainNav.vue";
import { mount } from "@vue/test-utils";

describe("MainNav.vue", () => {
  it("Displays company name", () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("Bobo Careers");
  });

  it("Displays Menu item for navigation", () => {
    const wrapper = mount(MainNav);
    const navigationItems = wrapper.findAll("[data-test='main-nav-list-iem']");
    const navigationMenuText = navigationItems.map((item) => item.text());
    expect(navigationMenuText).toEqual([
      "Teams",
      "Locations",
      "Life at Bobo Corp",
      "How we hire?",
      "Students",
      "Jobs",
    ]);
  });
});
