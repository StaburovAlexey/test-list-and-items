<template>
  <div class="color-box" :style="{ backgroundColor: color }"></div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
    },
  },
};
</script>

<style lang="css" scoped></style>
