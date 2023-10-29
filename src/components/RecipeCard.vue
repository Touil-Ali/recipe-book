<script>
export default {
  name: "RecipeCard",
  props: {
    recipe: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>

  <div class="recipe-card">
    <img :src="recipe.image" alt="Recipe Image">
    <h2 class="recipe-title">{{ recipe.name }}</h2>
    <p class="recipe-description">{{ recipe.description }}</p>
  </div>
</template>

<style scoped>

</style>