<template>
  <div class="main__block lists">
    <form class="lists__content-box" ref="lists">
      <div class="lists__content-label">
        <input type="checkbox" name="" id="" />List 1
      </div>
      <ul class="lists__content">
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
      </ul>
    </form>
    <form class="lists__content-box" ref="lists">
      <div class="lists__content-label">
        <input type="checkbox" name="" id="" />List 1
      </div>
      <ul class="lists__content">
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
      </ul>
    </form>
    <form class="lists__content-box" ref="lists">
      <div class="lists__content-label">
        <input type="checkbox" name="" id="" />List 1
      </div>
      <ul class="lists__content">
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
      </ul>
    </form>
    <form class="lists__content-box" ref="lists">
      <div class="lists__content-label">
        <input type="checkbox" name="" id="" />List 1
      </div>
      <ul class="lists__content">
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
      </ul>
    </form>
    <form class="lists__content-box" ref="lists">
      <div class="lists__content-label">
        <input type="checkbox" name="" id="" />List 1
      </div>
      <ul class="lists__content">
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
      </ul>
    </form>
  </div>
</template>

<script>
import ListItem from "./ListItem.vue";

export default {
  data() {
    return {
      lists: null,
    };
  },
  components: {
    ListItem,
  },
  mounted() {
    const lists = document.querySelectorAll(".lists__content-box");

    lists.forEach((list) => {
      list.addEventListener("click", () => {
        list.classList.toggle("active");
      });
    });
  },
};
</script>

<style scoped></style>
