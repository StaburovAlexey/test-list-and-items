<template>
  <form class="lists__content-box" ref="lists">
    <div class="lists__content-label">
      <CustomCheckbox
        @click.stop
        v-if="checkedCustom"
        :checkedCustom="checkedCustom"
        :indexList="indexList"
      ></CustomCheckbox>
      <input
        v-else
        class="checkbox"
        type="checkbox"
        name=""
        id="checkbox"
        @click.stop
        :checked="checked"
        @click="updateCheckedAllList()"
      />
      <p>{{ title }}</p>
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
import CustomCheckbox from "../CustomCheckbox.vue";
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
    checkedCustom: {
      type: Boolean,
    },
  },
  components: {
    ListItem,
    CustomCheckbox,
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

<style></style>
