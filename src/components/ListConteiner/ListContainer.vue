<template>
  <div class="main__block lists">
    <ListAcordion
      v-for="(item, index) in lists"
      :key="item.title"
      :title="item.title"
      :checked="item.checked"
      :items="item.items"
      :indexList="index"
      :checkedCustom="item.checkedCustom"
    ></ListAcordion>
  </div>
</template>

<script>
import ListAcordion from "./ListAcordion.vue";
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  components: {
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
  computed: {
    ...mapState(["lists"]),
  },
};
</script>

<style scoped></style>
