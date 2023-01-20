<template>
  <div>
    <h3 class="m-4">Adauga cheltuiala</h3>
    <input class="d-block mb-2 m-auto" v-model="purchase.name" placeholder="Name" type="text">
    <input class="d-block mb-2 m-auto" v-model="purchase.price" placeholder="Price" type="number">
    <select class="d-block mb-2 m-auto p-1" v-model="purchase.category">
      <option
          v-for="(category, index) in this.$store.state.categories"
          :key="index"
      >
        {{ category }}
      </option>
    </select>
    <button @click="addPurchase" class="add-button"> Add</button>
  </div>
</template>

<script>
export default {
  name: "PurchaseForm",
  data() {
    return {
      purchase: {
        name: '',
        price: '',
        category: this.$store.state.purchases[0].category,
      },
    };
  },
  methods: {
    addPurchase() {
      this.$store.dispatch('addPurchase', this.purchase)
      this.purchase = {
        name: '',
        price: '',
        category: this.$store.state.purchases[0].category,
      }
    }
  }
};
</script>

<style></style>
