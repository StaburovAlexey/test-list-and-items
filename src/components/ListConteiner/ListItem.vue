<template>
  <li class="lists__item">
    <input
      type="checkbox"
      :checked="checked"
      v-model="checkedModel"
      @input="updateChecked()"
    />
    <p>{{ name }}</p>
    <input type="number" v-model="quanityModel" min="0" max="100" />
    <input type="color" class="input-color" v-model="colorModel" />
  </li>
</template>

<script>
export default {
  components: {},
  methods: {
    updateQuanity() {
      this.$store.commit("changeQuanity", {
        quanity: this.quanityModel,
        index: this.index,
        indexList: this.indexList,
      });
    },
    updateColor() {
      this.$store.commit("changeColor", {
        color: this.colorModel,
        index: this.index,
        indexList: this.indexList,
      });
    },
    updateChecked() {
      this.$store.commit("changeChecked", {
        checked: this.checkedModel,
        index: this.index,
        indexList: this.indexList,
      });
      this.updateCheckedList();
    },
    updateCheckedList() {
      this.$store.commit("changeCheckedList", {
        indexList: this.indexList,
      });
    },
  },
  props: {
    name: {
      type: String,
    },
    color: {
      type: String,
      default: "#E93323",
    },
    checked: {
      type: Boolean,
    },
    quanity: {
      type: Number,
    },
    title: {
      type: String,
    },
    index: {
      type: Number,
    },
    indexList: {
      type: Number,
    },
  },
  data() {
    return {
      quanityModel: this.quanity,
      colorModel: this.color,
      checkedModel: this.checked,
    };
  },
  watch: {
    checked() {
      this.updateCheckedList();
    },
    quanityModel() {
      this.updateQuanity();
    },
    colorModel() {
      this.updateColor();
    },
    checkedModel() {
      this.updateChecked();
    },
  },
};
</script>

<style scoped></style>
