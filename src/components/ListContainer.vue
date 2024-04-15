<template>
  <div class="main__block lists">
    <ListAcordion></ListAcordion>
    <ListAcordion></ListAcordion>
    <ListAcordion></ListAcordion>
    <ListAcordion></ListAcordion>
    <ListAcordion></ListAcordion>
  </div>
</template>

<script>
import ListAcordion from "./ListAcordion.vue";
import ListItem from "./ListItem.vue";

export default {
  data() {
    return {
    };
  },
  components: {
    ListItem,
    ListAcordion,
  },
  mounted() {
    const lists = document.querySelectorAll(".lists__content-label");

    lists.forEach((list) => {
      list.addEventListener("click", () => {
        const parentLists = list.parentNode;
        parentLists.classList.toggle("active");
      });
    });
  },
};
</script>

<style scoped></style>
