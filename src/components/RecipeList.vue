

<template>
  <div class="recipe-list">
    <div class="recipe-card" v-for="recipe in recipes" :key="recipe.id">
      <recipe-card :recipe="recipe" />
    </div>
  </div>
 </template>
 <script>
import RecipeCard from "@/components/RecipeCard.vue";

export default {
  name: "RecipeList",
  components: {RecipeCard},
  props: {
    recipes: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>