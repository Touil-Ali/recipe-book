<script>
export default {
  name: "RecipeCard",
  props: {
    recipe: {
      type: Object,
      required: false
    }
  }
}
</script>

<template>

  <section>



          <!-- Item -->
          <a href="#" class="flex flex-col gap-4 rounded-md bg-[#f2f2f7] px-4 py-8 md:p-4">
            <div class="relative">
              <img :src="recipe.image" alt="" class="inline-block h-60 w-full rounded-md object-cover" />

            </div>
            <div class="flex w-full flex-col gap-5">
              <div class="rounded-md bg-[#f2f2f7] px-2 py-1.5">
                <p class="text-sm font-semibold text-[#6574f8]">{{ recipe.name }}</p>
              </div>
              <p class="font-bold">{{ recipe.description }}</p>
              <!-- Divider -->
              <div class="h-px w-full bg-black"></div>
              <div class="flex items-center">
                <div class="flex flex-col md:flex-row md:items-center">
                  <h6 class="text-base font-bold">Jessica Smith</h6>
                  <p class="mx-2 hidden text-sm text-[#636262] lg:block">-</p>
                  <p class="text-sm font-medium text-[#636262]">6 mins read</p>
                </div>
              </div>
            </div>
          </a>




  </section>


</template>

<style scoped>

</style>