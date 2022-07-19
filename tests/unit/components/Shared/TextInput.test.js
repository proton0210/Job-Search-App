import TextInput from "@/components/Shared/TextInput.vue";
import { shallowMount } from "@vue/test-utils";

describe("TextInput.vue", () => {
  it("communicates user has entered a character", () => {
    const wrapper = shallowMount(TextInput, {
      props: {
        modelValue: "",
      },
    });
    const input = wrapper.find("input");
    wrapper.emitted();
    input.setValue("N");
    wrapper.emitted();
    input.setValue("NY");
    wrapper.emitted();
    input.setValue("NYC");
    wrapper.emitted();
    const messages = wrapper.emitted()["update:modelValue"];
    expect(messages).toEqual([["N"], ["NY"], ["NYC"]]);
  });
});
