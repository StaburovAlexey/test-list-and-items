<template>
  <form class="lists__content-box" ref="lists">
    <div class="lists__content-label">
      <input
        class="checkbox"
        type="checkbox"
        name=""
        id="checkbox"
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

<style>
.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.custom-checkbox + label {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.custom-checkbox + label::before {
  content: "";
  display: inline-block;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #c3c3c3;
  border-radius: 0.25em;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}
.custom-checkbox:checked + label::before {
  border-color: blue;
  background-color: blue;
  background-image: url("/src/assets/dot.png");
}
</style>
