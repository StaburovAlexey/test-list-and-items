<template>
  <form class="lists__content-box" ref="lists">
    <div class="lists__content-label">
      <input type="checkbox" name="" id="" @click.stop />List 1
    </div>
    <ul class="lists__content">
      <ListItem></ListItem>
      <ListItem></ListItem>
      <ListItem></ListItem>
      <ListItem></ListItem>
    </ul>
  </form>
</template>

<script>
import ListItem from "./ListItem.vue";

export default {
  components: {
    ListItem,
  },
};
</script>

<style scoped></style>
