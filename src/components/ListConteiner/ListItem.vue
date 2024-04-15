<template>
  <li class="lists__item">
    <input type="checkbox" name="" id="" v-model="checkedModel" />
    <p>{{ name }}</p>
    <input type="text" v-model="quanityModel" />
    <input
      type="color"
      name=""
      id=""
      class="input-color"
      v-model="colorModel"
    />
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: Text,
    },
    color: {
      type: Text,
    },
    checked: {
      type: Boolean,
    },
    quanity: {
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
  computed() {},
};
</script>

<style scoped></style>
