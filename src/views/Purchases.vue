<template>
  <div>
    <h1>Gestioneaza-ti bugetul</h1>
    <button @click="displayAllCategories" class="rounded-1 btn btn-dark mt-5 mb-3">
      Categorii
    </button>
    <div v-show="showAllCategories">
      <PurchaseList :purchases="purchases"/>
    </div>
    <h3 class="my-3">Categoriile sunt:</h3>
    <div
        class="d-inline-block m-3"
        v-for="(category, index) in this.$store.state.categories"
        :key="index"
    >
      <PurchaseCategory :category="category"/>
    </div>
    <h3 class="m-3">Categoria pentru care s-a cheltuit cei mai putini bani este:
      <span class="rounded-2 p-1 "
            :class="{
        'bg-success': cheapestCategory === 'Haine',
        'bg-primary': cheapestCategory === 'Mancare',
        'bg-secondary': cheapestCategory === 'Utilitati',
        'bg-warning': cheapestCategory === 'Distractie',
        'bg-info': cheapestCategory === 'Altele',
      }">{{ cheapestCategory }}</span>
    </h3>

    <h3 class="m-3">
      Categoria pentru care s-au cheltuit cei mai multi bani este:
      <span class="p-1 rounded-2  "
            :class="{
        'bg-success': expensiveCategory === 'Haine',
        'bg-primary': expensiveCategory === 'Mancare',
        'bg-secondary': expensiveCategory === 'Utilitati',
        'bg-warning': expensiveCategory === 'Distractie',
        'bg-info': expensiveCategory === 'Altele',
      }">{{ expensiveCategory }}</span>
    </h3>
    <!--    <Category :category="expensiveCategory" />-->
    <div class="p-3 bg-primary bg-opacity-75 m-4">
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
      <button @click="searchByPrice" class="rounded-2 btn btn-secondary">Search</button>
      <PurchaseList :purchases="purchasesBetweenTwoPrices"/>
    </div>
    <h3 >Sorteaza cheltuielile in functie de pret:</h3>
    <button class="d-block m-auto btn btn-warning" @click="sortBy">Sort</button>
    <div v-show="showSortedPurchases">
      <PurchaseList :purchases="sortedPurchases"/>
    </div>
  </div>
</template>

<script>
import PurchaseList from "@/components/PurchaseList";
import PurchaseCategory from "@/components/PurchaseCategory";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Purchases",
  components: { PurchaseList, PurchaseCategory},
  data() {
    return {
      purchases: this.$store.state.purchases,
      showAllCategories: false,
      showSortedPurchases: false,
      sortedPurchases: [],
      purchasesBetweenTwoPrices: [],
      cheapestCategory: '',
      expensiveCategory: '',
      minPrice: "",
      maxPrice: "",
      showPurchaseByPrice: false,
      // filteredPurchase: [],
    };
  },
  mounted() {
    this.expensiveCategory = this.getexpensiveCategory()
    this.cheapestCategory = this.getcheapestCategory()
  },
  methods: {
    displayAllCategories() {
      this.showAllCategories = !this.showAllCategories;
    },
    sortBy() {
      this.showSortedPurchases = !this.showSortedPurchases;
      this.sortedPurchases = this.$store.getters.getPurchasesSortedByPrice;
    },
    searchByPrice() {
      this.purchasesBetweenTwoPrices = this.$store.getters.getPurchasesByPrice(
          this.maxPrice,
          this.minPrice
      );
    },
    getcheapestCategory() {
      let minPrice = Number.MAX_SAFE_INTEGER;
      let category;
      for (let i = 0; i < this.purchases.length; i++) {
        if (this.purchases[i].price < minPrice) {
          minPrice = this.purchases[i].price;
          category = this.purchases[i].category;
        }
      }
      return category;
    },
    getexpensiveCategory() {
      let maxPrice = Number.MIN_SAFE_INTEGER;
      let category;
      for (let i = 0; i < this.purchases.length; i++) {
        if (this.purchases[i].price > maxPrice) {
          maxPrice = this.purchases[i].price;
          category = this.purchases[i].category;
        }
      }
      return category;
    },
  },
};
</script>

<style scoped></style>
