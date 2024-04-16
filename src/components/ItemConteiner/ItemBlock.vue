<template>
  <div class="items__conteiner">
    <div class="items__container-header">
      <span class="items__container-title">{{ title }}</span>
      <button class="items__container-btn" @click="random()">
        {{ !isRandom ? "Премешать" : "Сортировать" }}
      </button>
    </div>
    <div class="items__cubes">
      <div v-if="!isRandom">
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
      <div v-else>
        <RandomItemBlock :boxesArray="randomBoxes"></RandomItemBlock>
      </div>
    </div>
  </div>
</template>

<script>
import ItemBlockLines from "./ItemBlockLines.vue";
import RandomItemBlock from "./RandomItemBlock.vue";
export default {
  data: () => ({
    isRandom: false,
  }),
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
    randomBoxes: {
      type: Array,
    },
  },
  components: {
    ItemBlockLines,
    RandomItemBlock,
  },
  methods: {
    random() {
      this.$store.commit("randomBox", {
        indexList: this.indexList,
      });
      this.isRandom = !this.isRandom;
    },
  },
};
</script>

<style scoped></style>
