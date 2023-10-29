<script>
import RecipeDetail from "@/components/RecipeDetail.vue";

export default {
  name: "RecipePage",
  components: {RecipeDetail},
  data() {
  return {
  selectedRecipe: null,
  }
  },
 mounted()  {
   const id = parseInt(this.$route.params.id);
  this.selectedRecipe = this.recipes.find(recipe => recipe.recipe.id === id);
  console.log(selectedRecipe);
 }
}
</script>

<template>
  <div class="recipe-view">
    <recipe-detail :recipe="selectedRecipe" />
  </div>
</template>

<style scoped>

</style>