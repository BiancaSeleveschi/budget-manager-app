<template>
  <div>
    <div
      class="d-inline-block m-3"
      v-for="(category, index) in this.$store.state.categories"
      :key="index"
    >
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
    </div>
    <div v-show="showCategory">
      <PurchaseList :purchases="purchases" />
    </div>
  </div>
</template>

<script>
import PurchaseList from "@/components/PurchaseList";
export default {
  name: "PurchaseCategory",
  components: { PurchaseList },
  data() {
    return {
      showCategory: false,
      category: "",
      purchases: this.purchasess(),
    };
  },
  methods: {
    purchasess(category) {
      return this.$store.getters.getPurchasesByCategory(category);
    },
    showPurchasesByCategory() {
      this.showCategory = !this.showCategory;
    },
  },
};
</script>

<style>
.np-color-preview {
  height: 200px;
  width: 200px;
  padding: 6px;
  border-radius: 4px;
  color: #fff;
}

.np-btn {
  margin-top: 12px;
  background: #eee;
  border: 0px;
  padding: 6px 10px;
  border-radius: 4px;
  background: rgb(0, 70, 201);
  color: #fff;
  cursor: pointer;
}
</style>
