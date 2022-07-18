<template>
  <input
    type="text"
    :value="modelValue"
    :placeholder="placeholder"
    @input="inputHandler"
    class="w-full font-normal border-none test-lg focus:ring-0"
  />
</template>

<script>
//Props should usually just flow down and should not be modified
export default {
  name: "TextInput",
  props: {
    placeholder: {
      type: String,
      required: true,
      default: "",
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
  methods: {
    // In parent component i.e JobSearchForm.vue, we have this EVENT(@) as : as handle-input
    inputHandler($event) {
      this.$emit("update:modelValue", $event.target.value); // name of the event and payload
    },
  },
};
</script>

<style></style>
