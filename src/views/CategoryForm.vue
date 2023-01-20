<template>
  <div>
    <h3 class="m-4">Adauga categorie</h3>
    <input v-model="category" placeholder="category" type="text" />
    <button class="add-button" @click="addCategory">Add</button>
  </div>
</template>

<script>
export default {
  name: "CategoryForm",
  props: ["purchase"],
  data() {
    return {
      category: "",
    };
  },
  methods: {
    addCategory() {
      this.$store.dispatch("addCategory", this.category);
    },
  },
};
</script>

<style>
.add-button {
border-radius: 5px;
  background: #175dff;
  color: white;
}
</style>
