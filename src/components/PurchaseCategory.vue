<template>
  <div>
    <!--        <div :style="{ backgroundColor: randomColor }" class="np-color-preview">-->
    <div
      @click="showCategories"
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
    </div>
    <div v-show="showCategory">
      <h4>Sorteaza categoria dupa pret</h4>
      <div
        v-for="(purchase, index) in filteredPurchase"
        :key="index"
        class="d-inline-block"
      >
        <PurchaseCard :purchase="purchase" />
      </div>
    </div>
    <!--      <button @click="getRandomColor" class="np-btn">Cate</button>-->
  </div>
</template>

<script>
import PurchaseCard from "@/components/PurchaseCard";
export default {
  name: "PurchaseCategory",
  components: { PurchaseCard },
  props: ["category"],
  data() {
    return {
      randomColor: "#ff0000",
      showCategory: false,
      indexCategory: -1,
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
    showCategories() {
      this.showCategory = !this.showCategory;
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
