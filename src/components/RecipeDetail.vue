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
 <div v-if="recipe"  class="recipe-detail">
   <img class="h-52 w-full object-cover " v-if="recipe.image" :src="'/' + recipe.image" alt="Recipe Image">

   <h2 class="recipe-title max-w-3xl ml-4 text-3xl font-bold md:text-5xl absolute top-48">{{ recipe.name }} 👨‍🍳</h2>

   <p class="recipe-description mt-12 ml-5 text-[#636262] mt-12">{{ recipe.description }}</p>
   <div class="mt-4 text-[#636262] ml-5">
    <h3 class="text-black">Ingredients:</h3>

   <ol class="recipe-ingredients ml-8 list-disc">
     <li v-for="step in recipe.instructions" :key="step.id">{{ step.description}}</li>
   </ol>
   </div>
   <div class="absolute flex justify-end mr-5 z-10 right-1 ">
   <router-link to="/" class="back-link inline-block items-center bg-[#FF914D] mt-16  px-4 py-2 text-center font-semibold text-white">Back to Recipes</router-link>
   </div>
   <div class="absolute opacity-60 right-1 top-80 z-0">
     <img class="h-96" src="../assets/backgr.svg" alt="">
   </div>
 </div>
  <div v-else>
    <p>Loading</p>
  </div>
</template>

<style scoped>

</style>