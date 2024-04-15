<template>
  <li class="lists__item">
    <input type="checkbox" name="" id="" />
    <p>{{ name }}</p>
    <p>{{ colorModel }}</p>
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
      type: Text,
    },
  },
  data() {
    return {
      quanityModel: this.quanity,
      colorModel: "",
    };
  },
  computed() {},
};
</script>

<style scoped></style>
