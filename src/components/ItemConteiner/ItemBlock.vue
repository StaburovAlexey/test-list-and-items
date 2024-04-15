<template>
  <div class="items__conteiner">
    <div class="items__container-header">
      <span class="items__container-title">{{ title }}</span>
      <button class="items__container-btn">Перемешать</button>
    </div>
    <div class="items__cubes">
      <div
        class="items__cubes-line"
        v-for="(item, index) in items"
        :key="item.name"
      >
        <ColorBox
          :color="item.color"
          :checked="item.checked"
          v-for="box in item.quanity"
          :key="box"
        ></ColorBox>
      </div>
    </div>
  </div>
</template>

<script>
import ColorBox from "@/components/ColorBox.vue";

export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    checked: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
    },
  },
  components: {
    ColorBox,
  },
};
</script>

<style scoped></style>
