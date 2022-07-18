<template>
  <input
    type="text"
    :value="value"
    :placeholder="placeholder"
    @input="handleInput"
    class="w-full font-normal border-none test-lg focus:ring-0"
  />
</template>

<script>
export default {
  name: "TextInput",
  props: {
    placeholder: {
      type: String,
      required: true,
      default: "",
    },
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    // In parent component i.e JobSearchForm.vue, we have this method: as handle-input
    handleInput($event) {
      this.value = $event.target.value;
      this.$emit("handleInput", this.value); // name of the event and payload
    },
  },
};
</script>

<style></style>
