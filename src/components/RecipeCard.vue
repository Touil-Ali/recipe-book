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
    <!-- Container -->
    <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
      <!-- Component -->
      <div class="flex flex-col items-center">
        <!-- Content -->
        <div class="mb-12 grid gap-4 sm:grid-cols-2 sm:justify-items-stretch md:mb-16 md:grid-cols-3 lg:mb-20 lg:gap-6">
          <!-- Item -->
          <a href="#" class="flex flex-col gap-4 rounded-md bg-[#f2f2f7] px-4 py-8 md:p-4">
            <div class="relative">
              <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64772c025e9047a330ad448e_Rectangle%2034.png" alt="" class="inline-block h-60 w-full rounded-md object-cover" />
              <div class="absolute bottom-[-10%] right-[8%] flex h-16 w-16 items-center justify-center rounded-full border-4 border-solid border-[#f2f2f7] bg-black">
                <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/647e0b7ecf55e2b1c5295de4_Vector.svg" alt="" class="inline-block" />
              </div>
            </div>
            <div class="flex w-full flex-col gap-5">
              <div class="rounded-md bg-[#f2f2f7] px-2 py-1.5">
                <p class="text-sm font-semibold text-[#6574f8]">{{ recipe.name }}</p>
              </div>
              <p class="font-bold">{{ recipe.description }}</p>
              <!-- Divider -->
              <div class="h-px w-full bg-black"></div>
              <div class="flex items-center">
                <img :src="recipe.image" alt="" class="mr-4 inline-block h-8 w-8 rounded-full" />
                <div class="flex flex-col md:flex-row md:items-center">
                  <h6 class="text-base font-bold">Jessica Smith</h6>
                  <p class="mx-2 hidden text-sm text-[#636262] lg:block">-</p>
                  <p class="text-sm font-medium text-[#636262]">6 mins read</p>
                </div>
              </div>
            </div>
          </a>


        </div>
        <!-- Button -->
        <a href="#" class="rounded-md bg-black px-6 py-3 font-semibold text-white">Check All&nbsp;Reviews</a>
      </div>
    </div>
  </section>


</template>

<style scoped>

</style>