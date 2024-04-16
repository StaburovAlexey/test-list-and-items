<template>
  <div class="custom-checkbox" @click="toggleCheckbox">
    <input type="checkbox" :checked="checked" class="hidden-checkbox" />
    <div class="checkbox-icon">{{ checked ? "✓" : "" }}</div>
    <div class="checkbox-label">{{ label }}</div>
  </div>
</template>

<script>
export default {
  props: {
    checked: {
      type: Boolean,
      required: true,
    },
    label: {
      type: String,
      default: "",
    },
  },
  methods: {
    toggleCheckbox() {
      this.$emit("update:checked", !this.checked);
    },
  },
};
</script>

<style>
.custom-checkbox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.hidden-checkbox {
  position: absolute;
  opacity: 0;
}

.checkbox-icon {
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
}

.checkbox-label {
  font-size: 16px;
}
</style>
