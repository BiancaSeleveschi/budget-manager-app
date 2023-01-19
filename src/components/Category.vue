<template>
  <div>
    <button
      @click="openPurchase"
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
    <div v-for="(purchase, index) in this.$store.state.purchases" :key="index">
      <div v-show="purchase.category === category && showPurchase">
        <PurchaseCard :purchase="purchase" class="d-inline-block m-auto mt-3" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Category",
  props: ["category"],
  data() {
    return {
      showPurchase: false,
    };
  },
  methods: {
    openPurchase() {
      this.showPurchase = !this.showPurchase;
    },
  },
};
</script>

<style scoped></style>
