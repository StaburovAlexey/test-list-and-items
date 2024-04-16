<template>
  <div class="items__conteiner">
    <div class="items__container-header">
      <span class="items__container-title">{{ title }}</span>
      <button class="items__container-btn" @click="random()">
        {{ !isRandom ? "Премешать" : "Сортировать" }}
      </button>
    </div>
    <div class="items__cubes">
      <ItemBlockLines
        v-if="!isRandom"
        v-for="(item, index) in items"
        :key="item.name"
        :color="item.color"
        :checked="item.checked"
        :quanity="item.quanity"
        :index="index"
        :indexList="indexList"
      ></ItemBlockLines>
      <RandomItemBlock :boxesArray="randomBoxes" v-else></RandomItemBlock>
    </div>
  </div>
</template>

<script>
import ColorBox from "@/components/ColorBox.vue";
import ItemBlockLines from "./ItemBlockLines.vue";
import RandomItemBlock from "./RandomItemBlock.vue";
import { mapState } from "vuex";
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
  },
  components: {
    ColorBox,
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
  computed: {
    ...mapState(["randomBoxes"]),
  },
};
</script>

<style scoped></style>
