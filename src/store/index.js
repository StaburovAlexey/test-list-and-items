import { createStore } from "vuex";

export default createStore({
  state: {
    lists: [
      {
        title: "List 1",
        checked: true,
        items: [
          { name: "Item 1", color: "#367c1d", checked: true, quanity: 3 },
          { name: "Item 2", color: "#425c1f", checked: false, quanity: 2 },
          { name: "Item 3", color: "#288c1f", checked: false, quanity: 30 },
          { name: "Item 4", color: "#135c1f", checked: false, quanity: 5 },
        ],
      },
      {
        title: "List 2",
        checked: false,
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
        items: [
          { name: "Item 1", color: "#E93323", checked: false, quanity: 0 },
          { name: "Item 2", color: "#E93323", checked: false, quanity: 0 },
          { name: "Item 3", color: "#E93323", checked: false, quanity: 0 },
          { name: "Item 4", color: "#E93323", checked: false, quanity: 0 },
        ],
      },
    ],
  },
  getters: {},
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
    changeCheckedList(state, { checked, indexList }) {
      const itemCheckedList = state.lists[indexList].items.map(
        (item) => item.checked
      );
      const hasTrue = itemCheckedList.includes(true);
      if (hasTrue) {
        state.lists[indexList].checked = true;
      } else {
        state.lists[indexList].checked = false;
      }
    },
    activeAllChecked(state,{indexList}){
      
    }
  },
  actions: {},
  modules: {},
});
