import HeadLine from "@/components/HeadLine.vue";
import { mount } from "@vue/test-utils";
import { nextTick } from "vue";
describe("HeadLine.vue", () => {
  it("displays introductory action verb", () => {
    jest.useFakeTimers("legacy");
    const wrapper = mount(HeadLine);
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Build for everyone");
    jest.useRealTimers();
  });

  it("changes action verb after consistent interval", () => {
    jest.useFakeTimers("legacy");
    mount(HeadLine);
    expect(setInterval).toHaveBeenCalled();
    jest.useRealTimers();
  });

  it("swaps action verb after first interval", async () => {
    jest.useFakeTimers("legacy");
    const wrapper = mount(HeadLine);
    jest.runOnlyPendingTimers();
    await nextTick(); // Use it immediately after you’ve changed some data to wait for the DOM update.
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Create for everyone");
    jest.useRealTimers();
  });

  it("removes interval when component disappears", () => {
    jest.useFakeTimers("legacy");

    const wrapper = mount(HeadLine);
    wrapper.unmount();
    expect(clearInterval).toHaveBeenCalled();
    jest.useRealTimers();
  });
});
