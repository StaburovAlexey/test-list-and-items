import { createStore } from "vuex";

export default createStore({
  state: {
    checkedCustom: false,
    lists: [
      {
        title: "List 1",
        checked: false,
        randomBoxes: [],
        checkedCustom: false,
        items: [
          { name: "Item 1", color: "#367c1d", checked: false, quanity: 3 },
          { name: "Item 2", color: "#425c1f", checked: false, quanity: 2 },
          { name: "Item 3", color: "#288c1f", checked: false, quanity: 30 },
          { name: "Item 4", color: "#135c1f", checked: false, quanity: 5 },
        ],
      },
      {
        title: "List 2",
        checked: false,
        randomBoxes: [],
        checkedCustom: false,
        items: [
          { name: "Item 1", color: "#E93323", checked: false, quanity: 2 },
          { name: "Item 2", color: "#E93323", checked: false, quanity: 0 },
          { name: "Item 3", color: "#E93323", checked: false, quanity: 0 },
          { name: "Item 4", color: "#E93323", checked: false, quanity: 0 },
        ],
      },
      {
        title: "List 3",
        checked: false,
        randomBoxes: [],
        checkedCustom: false,
        items: [
          { name: "Item 1", color: "#E93323", checked: false, quanity: 0 },
          { name: "Item 2", color: "#E93323", checked: false, quanity: 0 },
          { name: "Item 3", color: "#E93323", checked: false, quanity: 0 },
          { name: "Item 4", color: "#E93323", checked: false, quanity: 0 },
        ],
      },
      {
        title: "List 4",
        checked: false,
        randomBoxes: [],
        checkedCustom: false,
        items: [
          { name: "Item 1", color: "#E93323", checked: false, quanity: 0 },
          { name: "Item 2", color: "#E93323", checked: false, quanity: 0 },
          { name: "Item 3", color: "#E93323", checked: false, quanity: 0 },
          { name: "Item 4", color: "#E93323", checked: false, quanity: 0 },
        ],
      },
      {
        title: "List 5",
        checked: false,
        randomBoxes: [],
        checkedCustom: false,
        items: [
          { name: "Item 1", color: "#E93323", checked: false, quanity: 0 },
          { name: "Item 2", color: "#E93323", checked: false, quanity: 0 },
          { name: "Item 3", color: "#E93323", checked: false, quanity: 0 },
          { name: "Item 4", color: "#E93323", checked: false, quanity: 0 },
        ],
      },
    ],
  },
  mutations: {
    changeQuanity(state, { quanity, index, indexList }) {
      state.lists[indexList].items[index].quanity = quanity;
    },
    changeColor(state, { color, index, indexList }) {
      state.lists[indexList].items[index].color = color;
    },
    changeChecked(state, { checked, index, indexList }) {
      state.lists[indexList].items[index].checked = checked;
    },
    changeCheckedList(state, { indexList }) {
      const itemCheckedList = state.lists[indexList].items.map(
        (item) => item.checked
      );
      const hasTrue = itemCheckedList.includes(true);
      const allTrue = itemCheckedList.every((checked) => checked === true);
      if (hasTrue && !allTrue) {
        state.lists[indexList].checked = true;
        state.lists[indexList].checkedCustom = true;
      } else if (allTrue) {
        state.lists[indexList].checked = true;
        state.lists[indexList].checkedCustom = false;
      } else if (!allTrue) {
        state.lists[indexList].checked = false;
        state.lists[indexList].checkedCustom = false;
      }
    },
    activeAllChecked(state, { indexList }) {
      const hasTrue = state.lists[indexList].checked;
      if (hasTrue) {
        state.lists[indexList].items.forEach((item) => {
          item.checked = false;
        });
      } else {
        state.lists[indexList].items.forEach((item) => {
          item.checked = true;
        });
      }
    },
    countQuanity(state, { quanity, index, indexList }) {
      state.lists[indexList].items[index].quanity = quanity - 1;
    },
    randomBox(state, { indexList }) {
      const allBoxes = state.lists[indexList].items
        .filter((box) => box.checked === true)
        .map((box) => ({
          quanity: box.quanity,
          color: box.color,
        }));
      const newArray = allBoxes.flatMap((obj) =>
        Array.from({ length: obj.quanity }, () => ({ color: obj.color }))
      );
      state.lists[indexList].randomBoxes = newArray.sort(
        () => Math.random() - 0.5
      );
    },
  },
  actions: {},
  modules: {},
});
