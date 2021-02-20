<template>
  <button class="px-5 py-2 bg-red-600 text-white">
    {{ likeCount }}
  </button>
</template>

<script>
export default {
  name: "Like-button",
  props: {
    likeCount: {
      type: Number,
      required: true,
      default: 0,
    },
  },
};
</script>

<style></style>
