<template>
  <div>
    <!--        <div :style="{ backgroundColor: randomColor }" class="np-color-preview">-->
    <!--    <button @click="getRandomColor">Categorii</button>-->
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
  data() {
    return {
      randomColor: "#ff0000",
    };
  },
  methods: {
    deletePurchase() {
      this.$store.dispatch("deletePurchase", this.purchase.name);
    },
    getRandomColor() {
      this.randomColor = this.generateRandomHexColor();
    },
    generateRandomHexColor() {
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      if (randomColor.length !== 7) {
        return this.generateRandomHexColor();
      } else {
        return randomColor;
      }
    },
  },
};
</script>

<style></style>
