<template>
  <div>
    <h1>Gestioneaza-ti bugetul</h1>
    <button @click="displayAllCategories" class="rounded-1 btn btn-dark">
      Categorii
    </button>
    <div v-show="showAllCategories">
      <PurchaseList :purchases="purchases" />
    </div>
    <h3 class="my-3">Categoriile sunt:</h3>
    <PurchaseCategory />

    <!--    <h3>Categoria pentru care s-a cheltuit cei mai putini bani este:</h3>-->
    <!--    <Category :category="cheapestCategory" />-->
    <!--    <h3>Categoria pentru care s-a cheltuit cei mai putini bani este:</h3>-->
    <!--    <Category :category="expensiveCategory" />-->
    <div class="p-3 bg-primary bg-opacity-75">
      <h5 class="fw-bold mb-3">Vezi cheltuielile in functie de pret:</h5>
      <input
        class="d-block m-auto my-2"
        v-model="minPrice"
        type="number"
        placeholder="Pretul minim"
      />
      <input
        class="d-block m-auto my-2"
        v-model="maxPrice"
        type="number"
        placeholder="Pretul minim"
      />
      <button @click="searchByPrice" class="search-button mt-2">Search</button>
      <div v-show="showPurchaseByPrice">
        <PurchaseList :purchases="purchases" />
      </div>
    </div>
    <h3>Sorteaza cheltuielile in functie de pret:</h3>
    <button class="d-block m-auto" @click="sortBy">Sort</button>
    <div v-show="showSortedPurchases">
      <PurchaseList :purchases="sortedPurchases" />
    </div>
  </div>
</template>

<script>
import PurchaseList from "@/components/PurchaseList";
import PurchaseCategory from "@/components/PurchaseCategory";
// import Category from "@/components/Category";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Purchases",
  components: { PurchaseCategory, PurchaseList },
  data() {
    return {
      purchases: this.$store.state.purchases,
      showAllCategories: false,
      showCategory: false,
      showSortedPurchases: false,
      sortedPurchases: [],
      // cheapestCategory: this.getcheapestCategory,
      // expensiveCategory: this.getexpensiveCategory(),
      minPrice: "",
      maxPrice: "",
      showPurchaseByPrice: false,
    };
  },
  computed: {
    filteredPurchase() {
      return this.$store.state.purchases.filter(
        (p) => p.category === this.category
      );
    },
  },
  methods: {
    // getcheapestCategory() {
    //   let minPrice = Number.MAX_SAFE_INTEGER;
    //   let category;
    //   for (let i = 0; i < this.purchases.length; i++) {
    //     if (this.purchases[i].price < minPrice) {
    //       minPrice = this.purchases[i].price;
    //       category = this.purchases[i].category;
    //     }
    //   }
    //   return category;
    // },
    // getexpensiveCategory() {
    //   let maxPrice = Number.MIN_SAFE_INTEGER;
    //   let category;
    //   for (let i = 0; i < this.purchases.length; i++) {
    //     if (this.purchases[i].price > maxPrice) {
    //       maxPrice = this.purchases[i].price;
    //       category = this.purchases[i].category;
    //     }
    //   }
    //   return category;
    // },
    displayAllCategories() {
      this.showAllCategories = !this.showAllCategories;
    },
    sortBy() {
      this.sortedPurchases = this.$store.getters.getPurchasesSortedBy;
      this.showSortedPurchases = !this.showSortedPurchases;
    },
    searchByPrice() {
      this.showPurchaseByPrice = !this.showPurchaseByPrice;
      this.purchases = this.$store.getters.getPurchaseByPrice(
        this.maxPrice,
        this.minPrice
      );
    },
  },
};
</script>

<style scoped></style>
