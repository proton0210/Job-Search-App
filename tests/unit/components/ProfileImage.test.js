import ProfileImage from "@/components/ProfileImage.vue";
import { shallowMount } from "@vue/test-utils";

describe("ProfileImage.vue", () => {
  it("renders", () => {
    const wrapper = shallowMount(ProfileImage);
    expect(wrapper.exists()).toBe(true);
  });
});
