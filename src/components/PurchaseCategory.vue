<template>
  <div>
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
      purchases: this.getPurchases(),
    };
  },
  methods: {
    showPurchasesByCategory() {
      this.showPurchase = !this.showPurchase;
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

/*!*.np-color-preview {*!*/
/*!*  height: 200px;*!*/
/*!*  width: 200px;*!*/
/*!*  padding: 6px;*!*/
/*!*  border-radius: 4px;*!*/
/*!*  color: #fff;*!*/
/*!*}*!*/
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

/*!*.np-btn {*!*/
/*!*  margin-top: 12px;*!*/
/*!*  background: #eee;*!*/
/*!*  border: 0px;*!*/
/*!*  padding: 6px 10px;*!*/
/*!*  border-radius: 4px;*!*/
/*!*  background: rgb(0, 70, 201);*!*/
/*!*  color: #fff;*!*/
/*!*  cursor: pointer;*!*/
/*!*}*!*/
</style>
