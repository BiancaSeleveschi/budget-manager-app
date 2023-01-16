<template>
  <div>
    <input v-model="category" placeholder="category" type="text" />
    <button @click="addCategory">Add</button>
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

<style scoped></style>
