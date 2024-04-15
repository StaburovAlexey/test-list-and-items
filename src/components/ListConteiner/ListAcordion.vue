<template>
  <form class="lists__content-box" ref="lists">
    <div class="lists__content-label">
      <input type="checkbox" name="" id="" @click.stop :checked="checked" />{{
        title
      }}
    </div>
    <ul class="lists__content">
      <ListItem
        v-for="(item, index) in items"
        :key="item.title"
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
      default: () => [],
    },
    title: {
      type: String,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    ListItem,
  },
};
</script>

<style scoped></style>
