<template>
  <div>
    <h1>Gestioneaza-ti bugetul</h1>
    <button @click="displayAllCategories" class="rounded-1 btn btn-dark">
      Categorii
    </button>
    <div v-show="showAllCategories">
      <div
        v-for="(purchase, index) in purchases"
        :key="index"
        class="d-inline-block"
      >
        <PurchaseCard :purchase="purchase" />
      </div>
    </div>
    <h3 class="my-3">Categoriile sunt:</h3>
    <div
      class="d-inline-block m-3"
      v-for="(category, index) in this.$store.state.categories"
      :key="index"
    >
      <PurchaseCategory :category="category" />
    </div>
  </div>
</template>

<script>
import PurchaseCard from "@/components/PurchaseCard";
import PurchaseCategory from "@/components/PurchaseCategory";

export default {
  name: "PurchaseList",
  components: { PurchaseCategory, PurchaseCard },
  data() {
    return {
      purchases: this.$store.state.purchases,
      showAllCategories: false,
      showCategory: false,
    };
  },
  methods: {
    displayAllCategories() {
      this.showAllCategories = !this.showAllCategories;
    },
    // showCategories(category) {
    //   return this.purchases.filter((p) => p.category === category);
    //   // this.showCategory = !this.showCategory;
    // },
  },
};
</script>

<style scoped></style>
