<template>
  <div>
    <!--    <div-->
    <!--      class="d-inline-block m-3"-->
    <!--      v-for="(category, index) in this.$store.state.categories"-->
    <!--      :key="index"-->
    <!--    >-->
    <button
      @click="showPurchasesByCategory"
      class="p-3 rounded-2 fw-bold"
      :class="{
        'bg-success': category === 'Haine',
        'bg-primary': category === 'Mancare',
        'bg-secondary': category === 'Utilitati',
        'bg-warning': category === 'Distractie',
        'bg-info': category === 'Altele',
      }"
    >
      {{ category }}
    </button>
    <!--    </div>-->
    <div v-show="showPurchase">
      <PurchaseList :purchases="purchases" />
    </div>
  </div>
</template>

<script>
import PurchaseList from "@/components/PurchaseList";

export default {
  name: "PurchaseCategory",
  components: { PurchaseList },
  props: ["category"],
  data() {
    return {
      showPurchase: false,
      // category: "",
      purchases: this.getPurchases(),
    };
  },
  computed: {
    // purchases() {
    //   if (this.category) {
    //     return this.$store.getters.getPurchasesByCategory(this.category);
    //   }
    //   return this.$store.state.purchases;
    // },
  },
  methods: {
    showPurchasesByCategory() {
      this.showPurchase = !this.showPurchase;
      // this.category = category;
    },
    getPurchases() {
      return this.$store.state.purchases.filter(
        (p) => p.category === this.category
      );
    },
  },
};
</script>

<style>
/*.np-color-preview {*/
/*  height: 200px;*/
/*  width: 200px;*/
/*  padding: 6px;*/
/*  border-radius: 4px;*/
/*  color: #fff;*/
/*}*/

/*.np-btn {*/
/*  margin-top: 12px;*/
/*  background: #eee;*/
/*  border: 0px;*/
/*  padding: 6px 10px;*/
/*  border-radius: 4px;*/
/*  background: rgb(0, 70, 201);*/
/*  color: #fff;*/
/*  cursor: pointer;*/
/*}*/
</style>
