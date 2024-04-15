<template>
  <div class="main">
    <ListContainer class="main_block"></ListContainer>
    <ItemContainer class="main_block"></ItemContainer>
  </div>
</template>

<script>
import ListContainer from "./components/ListConteiner/ListContainer.vue";
import ItemContainer from "./components/ItemConteiner/ItemContainer.vue";

export default {
  components: {
    ListContainer,
    ItemContainer,
  },
};
</script>

<style lang="css">
@import "./assets/index.css";
</style>
