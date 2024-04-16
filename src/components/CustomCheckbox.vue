<template>
  <div>
    <input
      type="checkbox"
      v-model="isChecked"
      class="hidden-checkbox"
      @change="handleChange"
    />
    <div class="custom-checkbox checked" @click="toggleCheckbox">
      <div class="inner-circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChecked: true,
    };
  },
  methods: {
    handleChange(event) {
      this.isChecked = event.target.checked;
    },
    toggleCheckbox() {
      // this.isChecked = !this.isChecked;
      this.updateCheckedAllList();
    },
    updateCheckedAllList() {
      this.$store.commit("activeAllChecked", {
        indexList: this.indexList,
      });
    },
  },
  props: {
    checkedCustom: {
      type: Boolean,
      default: false,
    },
    indexList: {
      type: Number,
    },
  },
};
</script>

<style>
.hidden-checkbox {
  position: absolute;
  opacity: 0;
}

.custom-checkbox {
  width: 13px;
  height: 13px;
  border: 1px solid rgb(133, 133, 133);
  border-radius: 3px;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  padding-block: 1px;
  padding-inline: 2px;
  align-items: center;
}

.inner-circle {
  width: 5px;
  height: 5px;
  background-color: #000;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}

.custom-checkbox.checked .inner-circle {
  opacity: 1;
}
</style>
