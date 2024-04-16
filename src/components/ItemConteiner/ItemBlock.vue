<template>
  <div class="items__conteiner">
    <div class="items__container-header">
      <span class="items__container-title">{{ title }}</span>
      <button class="items__container-btn">Перемешать</button>
    </div>
    <div class="items__cubes">
      <ItemBlockLines
        v-for="(item, index) in items"
        :key="item.name"
        :color="item.color"
        :checked="item.checked"
        :quanity="item.quanity"
        :index="index"
        :indexList="indexList"
      ></ItemBlockLines>
    </div>
  </div>
</template>

<script>
import ColorBox from "@/components/ColorBox.vue";
import ItemBlockLines from "./ItemBlockLines.vue";

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
    indexList: {
      type: Number,
    },
  },
  components: {
    ColorBox,
    ItemBlockLines,
  },
};
</script>

<style scoped></style>
