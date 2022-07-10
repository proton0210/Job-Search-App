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
  it("displays user profile picture", async () => {
    const wrapper = mount(MainNav);

    let profileImage = wrapper.find("[data-test='main-nav-profile-image']");
    expect(profileImage.exists()).toBe(false);

    let loginButton = wrapper.find("[data-test='main-nav-login-button']");
    expect(loginButton.exists()).toBe(true);

    await loginButton.trigger("click");

    profileImage = wrapper.find("[data-test='main-nav-profile-image']");
    loginButton = wrapper.find("[data-test='main-nav-login-button']");

    expect(loginButton.exists()).toBe(false);
    expect(profileImage.exists()).toBe(true);
  });
});
