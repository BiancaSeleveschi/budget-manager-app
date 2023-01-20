import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    purchases: [
      {
        name: "Rochie",
        price: 550,
        category: "Haine",
      },
      {
        name: "Cereale",
        price: 9,
        category: "Mancare",
      },
      {
        name: "Concert",
        price: 270,
        category: "Distractie",
      },
      {
        name: "Festival de muzica",
        price: 220,
        category: "Distractie",
      },
      {
        name: "City-Break",
        price: 2300,
        category: "Altele",
      },
      {
        name: "Gaz",
        price: 460,
        category: "Utilitati",
      },
      {
        name: "Camasa",
        price: 90,
        category: "Haine",
      },
      {
        name: "Curent",
        price: 48,
        category: "Utilitati",
      },
      {
        name: "Pizza",
        price: 30,
        category: "Mancare",
      },
    ],
    categories: ["Mancare", "Distractie", "Haine", "Utilitati", "Altele"],
  },
  getters: {
    getPurchasesSortedByPrice: (state) => {
      return state.purchases.sort(function (a, b) {
        if (a.price < b.price) {
          return -1;
        }
        if (a.price > b.price) {
          return 1;
        }
        return 0;
      });
    },
    getPurchasesByCategory: (state) => (category) => {
      return state.purchases.filter((p) => p.category === category);
    },
    getPurchasesByPrice: (state) => (maxPrice, minPrice) => {
      return state.purchases.filter(
        (p) => p.price < maxPrice && p.price > minPrice
      );
    },
  },
  mutations: {
    DELETE_PURCHASE(state, name) {
      let index = state.purchases.findIndex((p) => p.name === name);
      state.purchases.splice(index, 1);
    },
    ADD_CATEGORY(state, category) {
      state.categories.push(category);
    },
    ADD_PURCHASE(state, purchase) {
      state.purchases.push(purchase);
    },
  },
  actions: {
    deletePurchase(context, name) {
      context.commit("DELETE_PURCHASE", name);
    },
    addCategory(context, category) {
      context.commit("ADD_CATEGORY", category);
    },
    addPurchase(context, purchase) {
      context.commit("ADD_PURCHASE", purchase);
    },
  },
  modules: {},
});
