<template>
  <div class="main__block items">
    <ItemBlock
      v-for="(list, index) in lists"
      :key="list.title"
      :title="list.title"
      :checked="list.checked"
      :items="list.items"
      :indexList="index"
      :randomBoxes="list.randomBoxes"
    />
  </div>
</template>

<script>
import ItemBlock from "./ItemBlock.vue";
import { mapState } from "vuex";
export default {
  components: {
    ItemBlock,
  },
  computed: {
    ...mapState(["lists"]),
  },
};
</script>

<style scoped></style>
