import HeadLine from "@/components/JobSearch/HeadLine.vue";
import { shallowMount } from "@vue/test-utils";
import { nextTick } from "vue";
describe("HeadLine.vue", () => {
  //Runs before each "it" test
  /*
  beforeEach(() => {
  });

  afterEach(() => {
    jest.useRealTimers();
  });
*/

  it("displays introductory action verb", () => {
    jest.useFakeTimers("legacy");

    const wrapper = shallowMount(HeadLine);
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Build for everyone");
    jest.useRealTimers();
  });

  it("changes action verb after consistent interval", () => {
    jest.useFakeTimers("legacy");
    shallowMount(HeadLine);
    expect(setInterval).toHaveBeenCalled();
    jest.useFakeTimers("legacy");
  });

  it("swaps action verb after first interval", async () => {
    const wrapper = shallowMount(HeadLine);
    jest.runOnlyPendingTimers();
    await nextTick(); // Use it immediately after you’ve changed some data to wait for the DOM update.
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Create for everyone");
    jest.useRealTimers();
  });

  it("removes interval when component disappears", () => {
    jest.useFakeTimers("legacy");

    const wrapper = shallowMount(HeadLine);
    wrapper.unmount();
    expect(clearInterval).toHaveBeenCalled();
    jest.useRealTimers();
  });
});
