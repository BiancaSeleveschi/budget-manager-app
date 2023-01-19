<template>
  <div>
    <div
      v-for="(purchase, index) in purchases"
      :key="index"
      class="d-inline-block"
    >
      <PurchaseCard :purchase="purchase" />
    </div>
  </div>
</template>

<script>
import PurchaseCard from "@/components/PurchaseCard";
export default {
  name: "PurchaseList",
  components: { PurchaseCard },
  props: ["purchases"],
};
</script>

<style scoped></style>
