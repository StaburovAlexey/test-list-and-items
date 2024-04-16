<template>
  <li class="lists__item">
    <input
      type="checkbox"
      name=""
      id=""
      v-model="checkedModel"
      @change="updateChecked"
    />
    <p>{{ name }}</p>
    <input
      type="number"
      v-model="quanityModel"
      @change="updateQuanity"
      min="0"
    />
    <input
      type="color"
      name=""
      id=""
      class="input-color"
      v-model="colorModel"
      @change="updateColor"
    />
  </li>
</template>

<script>
export default {
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
  },
};
</script>

<style scoped></style>
