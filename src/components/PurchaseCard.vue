<template>
  <div>
    <div
      class="rounded-1 p-4 m-3"
      :class="{
        'bg-success': purchase.category === 'Haine',
        'bg-primary': purchase.category === 'Mancare',
        'bg-secondary': purchase.category === 'Utilitati',
        'bg-warning': purchase.category === 'Distractie',
        'bg-info': purchase.category === 'Altele',
      }"
    >
      <h4>{{ purchase.name }}</h4>
      <h4>{{ purchase.category }}</h4>
      <p>
        Price: <span class="fw-bold">{{ purchase.price }}</span>
      </p>
      <button @click="deletePurchase" class="btn btn-danger">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PurchaseCard",
  props: ["purchase"],
  methods: {
    deletePurchase() {
      this.$store.dispatch("deletePurchase", this.purchase.name);
    },
  },
};
</script>

<style></style>
