<template>
  <div class="main__block items">
    <ItemBlock
      v-for="(item, index) in lists"
      :key="item.title"
      :title="item.title"
      :checked="item.checked"
      :items="item.items"
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
