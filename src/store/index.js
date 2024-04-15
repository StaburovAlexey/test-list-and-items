import { createStore } from "vuex";

export default createStore({
  state: {
    lists: [
      {
        title: "List 1",
        checked: true,
        items: [
          { name: "Item 1", color: "", checked: false, quanity: "3" },
          { name: "Item 2", color: "", checked: false, quanity: "" },
          { name: "Item 3", color: "", checked: false, quanity: "" },
          { name: "Item 4", color: "", checked: false, quanity: "" },
        ],
      },
      {
        title: "List 2",
        checked: false,
        items: [
          { name: "Item 1", color: "", checked: false, quanity: "" },
          { name: "Item 2", color: "", checked: false, quanity: "" },
          { name: "Item 3", color: "", checked: false, quanity: "" },
          { name: "Item 4", color: "", checked: false, quanity: "" },
        ],
      },
      {
        title: "List 3",
        checked: false,
        items: [
          { name: "Item 1", color: "", checked: false, quanity: "" },
          { name: "Item 2", color: "", checked: false, quanity: "" },
          { name: "Item 3", color: "", checked: false, quanity: "" },
          { name: "Item 4", color: "", checked: false, quanity: "" },
        ],
      },
      {
        title: "List 4",
        checked: false,
        items: [
          { name: "Item 1", color: "", checked: false, quanity: "" },
          { name: "Item 2", color: "", checked: false, quanity: "" },
          { name: "Item 3", color: "", checked: false, quanity: "" },
          { name: "Item 4", color: "", checked: false, quanity: "" },
        ],
      },
      {
        title: "List 5",
        checked: false,
        items: [
          { name: "Item 1", color: "", checked: false, quanity: "" },
          { name: "Item 2", color: "", checked: false, quanity: "" },
          { name: "Item 3", color: "", checked: false, quanity: "" },
          { name: "Item 4", color: "", checked: false, quanity: "" },
        ],
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
