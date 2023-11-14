<script>
import RecipeDetail from "@/components/RecipeDetail.vue";
import json from "@/data/recipes.json";

export default {
  name: "RecipePage",
  components: { RecipeDetail },
  data() {
    return {
      selectedRecipe: null,
      recipes: [],
    };
  },
  async mounted() {
    const id = parseInt(this.$route.params.id);
    this.recipes = await json.recipes;

    // Assuming each recipe has an "id" property directly, not nested under "recipe"
    this.selectedRecipe = await this.recipes.find(recipe => recipe.id === id);
    console.log('Selected Recipe:', this.selectedRecipe);
    console.log('ID:', id);
  }
};
</script>

<template>
  <div class="recipe-view">
     <recipe-detail :recipe="selectedRecipe" />
  </div>
</template>

<style scoped>
</style>
