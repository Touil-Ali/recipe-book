<script>
export default {
  name: "RecipeDetail",
  props: {
    recipe: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
 <div class="recipe-detail">
    <router-link to="/" class="back-link">Back to Recipes</router-link>
   <h2 class="recipe-title">{{ recipe.name }}</h2>
   <img :src="recipe.image" alt="Recipe Image" class="recipe-image">
    <p class="recipe-description">{{ recipe.description }}</p>
    <h3>Ingredients:</h3>
   <ol class="recipe-ingredients">
     <li v-for="step in recipe.instructions" :key="step.id">{{ step.description}}</li>
   </ol>
 </div>
</template>

<style scoped>

</style>