

<template>
  <h1>Welcome to Moroccan Recipes</h1>
  <p>Here you will find a collection of Moroccan recipes.</p>
  <p>Click on a recipe to see the details.</p>
  <div class="recipe-list">

    <div v-if="recipes.length > 0">

    <router-link
        v-for="recipe in recipes"
        :key="recipe.id"
        :to="{ name: 'Recipe', params: { id: recipe.id } }"
    >
      <recipe-card :recipe="recipe" />
    </router-link>


    </div>
    <div v-else>
      <p>No Data ..</p>
    </div>
  </div>

  </template>
<script>
import RecipeList from "@/components/RecipeList.vue";
import RecipeCard from "@/components/RecipeCard.vue";
import json from "@/data/recipes.json";

export default {
  name: "Home",
  components: {RecipeCard, RecipeList},
  data() {
    return {
      recipes: json.recipes,
    };
  },
 }
</script>
<style scoped>

</style>