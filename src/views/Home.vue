

<template>
<navbar></navbar>
  <div class="flex flex-col items-center">

  <h2 class="max-w-3xl text-center text-3xl font-bold md:text-5xl">Welcome to Moroccan Recipes</h2>
  <p class="mt-4 text-[#636262]">Here you will find a collection of Moroccan recipes.</p>
  <p class="mb-12 mt-4 text-[#636262]">Click on a recipe to see the details.</p>
</div>

  <div class="recipe-list">

    <div v-if="recipes.length > 0">
      <!-- Container -->
      <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <!-- Component -->
        <div class="flex flex-col items-center">
          <!-- Content -->
          <div class="mb-12 grid gap-4 sm:grid-cols-2 sm:justify-items-stretch md:mb-16 md:grid-cols-3 lg:mb-20 lg:gap-6">
    <router-link
        v-for="recipe in recipes"
        :key="recipe.id"
        :to="{ name: 'Recipe', params: { id: recipe.id } }"
    >
      <recipe-card :recipe="recipe" />
    </router-link>
      </div>
          <!-- Button -->
          <a href="#" class="rounded-md bg-black px-6 py-3 font-semibold text-white">Check All&nbsp;Reviews</a>

        </div>

      </div>

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
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Home",
  components: {Navbar, RecipeCard, RecipeList},
  data() {
    return {
      recipes: json.recipes,
    };
  },
 }
</script>
<style scoped>

</style>