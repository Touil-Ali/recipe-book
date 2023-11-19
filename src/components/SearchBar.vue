<script>
export default {
  name: "SearchBar",
  props: {
    recipes: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      input: '',
      isComplete: false,

  }},
  computed:{
    filtreRecipes() {
      this.isComplete = true;
      const filtredRecipes = this.recipes.filter((recipe) => {
        return recipe.name.toLowerCase().includes(this.input.toLowerCase())
      });
      if(filtredRecipes.length > 0) {
        this.isComplete = false;
      }
      this.$emit('filtre-recipe', filtredRecipes)

  }

  }

}

</script>

<template>
  <div class="w-2/4	">
    <label for="hs-search-box-with-loading-5" class="block text-sm font-medium mb-2 ">Search</label>
    <div class="relative flex rounded-lg shadow-sm">
      <input type="text" v-model="input" id="hs-search-box-with-loading-5" name="hs-search-box-with-loading-5" class="py-3 px-4 ps-11 block w-full border-[#FF914D] shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-[#FF914D]  focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " placeholder="Ex Tagine ...">

      <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
        <svg class="flex-shrink-0 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
      </div>
      <ul>
        <li v-for="(item, index) in filtreRecipes" :key="index" @click="() => input = item.name" v-html="item.name.replace(input, `<strong>${input}</strong>`)"></li>
      </ul>
      <button type="button"  @click="filtreRecipes" class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-[#FF914D] text-white hover:bg-[#FF894D] disabled:opacity-50 disabled:pointer-events-none ">
      <span v-if="isComplete" class="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading">
        <span class="sr-only">Loading...</span>
      </span>
        Search
      </button>
    </div>

  </div>
</template>

<style scoped>

</style>