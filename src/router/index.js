import Vue from "vue";
import VueRouter from "vue-router";
import Purchases from "@/views/Purchases";
import PurchaseForm from "@/views/PurchaseForm";
import CategoryForm from "@/views/CategoryForm";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "purchases",
    component: Purchases,
  },
  {
    path: "/add/purchase",
    name: "purchase-form",
    component: PurchaseForm,
  },
  {
    path: "/add/category",
    name: "category-form",
    component: CategoryForm,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
