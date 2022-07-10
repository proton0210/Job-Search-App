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

describe("when user is logged out", () => {
  it("displays sign in  button", () => {
    const wrapper = mount(MainNav);
    const loginButton = wrapper.find("[data-test='main-nav-login-button']");
    expect(loginButton.exists()).toBe(true);
  });
});

describe("when user is logged in", () => {
  it("displays sign out button", async () => {
    const wrapper = mount(MainNav);
    await wrapper.setData({
      isLoggedIn: true,
    });
    const profileImage = wrapper.find("[data-test='main-nav-profile-image']");
    const loginButton = wrapper.find("[data-test='main-nav-login-button']");
    expect(profileImage.exists()).toBe(true);
    expect(loginButton.exists()).toBe(false);
  });
});
