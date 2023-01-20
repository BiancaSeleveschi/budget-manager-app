<template>
  <div>
  <div  class="rounded-2 border border-1"
    :class="{
    'bg-success': category === 'Haine',
    'bg-primary': category === 'Mancare',
    'bg-secondary': category === 'Utilitati',
    'bg-warning': category === 'Distractie',
    'bg-info': category === 'Altele',
    }">
  </div>
    {{category}}
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
};
</script>

<style scoped></style>
