import { createStore } from "vuex";

export default createStore({
  state: {
    lists: [
      {
        title: "List 1",
        cheked: false,
        items: [
          { name: "Item 1", color: "", cheked: false, quanity: "" },
          { name: "Item 2", color: "", cheked: false, quanity: "" },
          { name: "Item 3", color: "", cheked: false, quanity: "" },
          { name: "Item 4", color: "", cheked: false, quanity: "" },
        ],
      },
      {
        title: "List 2",
        cheked: false,
        items: [
          { name: "Item 1", color: "", cheked: false, quanity: "" },
          { name: "Item 2", color: "", cheked: false, quanity: "" },
          { name: "Item 3", color: "", cheked: false, quanity: "" },
          { name: "Item 4", color: "", cheked: false, quanity: "" },
        ],
      },
      {
        title: "List 3",
        cheked: false,
        items: [
          { name: "Item 1", color: "", cheked: false, quanity: "" },
          { name: "Item 2", color: "", cheked: false, quanity: "" },
          { name: "Item 3", color: "", cheked: false, quanity: "" },
          { name: "Item 4", color: "", cheked: false, quanity: "" },
        ],
      },
      {
        title: "List 4",
        cheked: false,
        items: [
          { name: "Item 1", color: "", cheked: false, quanity: "" },
          { name: "Item 2", color: "", cheked: false, quanity: "" },
          { name: "Item 3", color: "", cheked: false, quanity: "" },
          { name: "Item 4", color: "", cheked: false, quanity: "" },
        ],
      },
      {
        title: "List 5",
        cheked: false,
        items: [
          { name: "Item 1", color: "", cheked: false, quanity: "" },
          { name: "Item 2", color: "", cheked: false, quanity: "" },
          { name: "Item 3", color: "", cheked: false, quanity: "" },
          { name: "Item 4", color: "", cheked: false, quanity: "" },
        ],
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
