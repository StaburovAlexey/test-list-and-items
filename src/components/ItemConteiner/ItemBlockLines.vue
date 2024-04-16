<template>
  <div class="items__cubes-line" v-if="checked">
    <ColorBox
      v-for="box in quanity"
      :key="box"
      :color="color"
      @click="delBox()"
    ></ColorBox>
  </div>
</template>

<script>
import ColorBox from "../ColorBox.vue";

export default {
  props: {
    color: {
      type: String,
    },
    checked: {
      type: Boolean,
    },
    quanity: {
      type: Number,
    },
    index: {
      type: Number,
    },
    indexList: {
      type: Number,
    },
  },
  components: {
    ColorBox,
  },
  methods: {
    delBox() {
      this.$store.commit("countQuanity", {
        quanity: this.quanity,
        index: this.index,
        indexList: this.indexList,
      });
    },
  },
};
</script>

<style scoped></style>
