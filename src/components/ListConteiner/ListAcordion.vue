<template>
  <form class="lists__content-box" ref="lists">
    <div class="lists__content-label">
      <input
        type="checkbox"
        name=""
        id=""
        @click.stop
        :checked="checked"
        @click="updateCheckedAllList()"
      />{{ title }}
    </div>
    <ul class="lists__content">
      <ListItem
        v-for="(item, index) in items"
        :key="index"
        :index="index"
        :indexList="indexList"
        :title="title"
        :name="item.name"
        :color="item.color"
        :checked="item.checked"
        :quanity="item.quanity"
      ></ListItem>
    </ul>
  </form>
</template>

<script>
import ListItem from "./ListItem.vue";

export default {
  props: {
    items: {
      type: Array,
    },
    title: {
      type: String,
    },
    checked: {
      type: Boolean,
    },
    indexList: {
      type: Number,
    },
  },
  components: {
    ListItem,
  },
  methods: {
    updateCheckedAllList() {
      this.$store.commit("activeAllChecked", {
        indexList: this.indexList,
      });
    },
  },
};
</script>

<style scoped></style>
