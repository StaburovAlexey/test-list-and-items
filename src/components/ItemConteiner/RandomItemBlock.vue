<template>
  <div class="items__cubes-line">
    <ColorBox
      v-for="(item, index) in boxesArray"
      :key="index"
      :color="item.color"
    ></ColorBox>
  </div>
</template>

<script>
import ColorBox from "../ColorBox.vue";

export default {
  components: {
    ColorBox,
  },
  props: {
    boxesArray: {
      type: Array,
    },
  },
  watch: {
    boxesArray(old, newj) {
      console.log(newj);
    },
  },
};
</script>

<style lang="scss" scoped></style>
