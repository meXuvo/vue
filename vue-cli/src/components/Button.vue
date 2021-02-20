<template>
  <button class="px-3 py-3 text-white rounded focus:ring-2 focus:outline-none">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    label: {
      type: String,
      required: true,
      default: "button",
    },
  },
};
</script>

<style></style>
