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
