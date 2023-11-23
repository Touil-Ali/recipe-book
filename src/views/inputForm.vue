<script>
export default {
  name: "inputForm"
}
</script>

<template>

    <section>
      <!-- Container -->
      <div class="mx-auto w-full max-w-3xl px-5 py-16 md:px-10 md:py-24 lg:py-32 border-white ">
        <!-- Component -->
        <div class="mx-auto max-w-xl bg-[#f2f2f7] px-8 py-12 text-center">
          <!-- Title -->
              <div class="mx-auto w-full max-w-[400px]">
              <h1>Drop Your Fav Recipe</h1>
              <p>Share your recipe with the world</p>
              <div class="text-start ">
                <label for="input-label" class="block text-sm font-medium mb-2 ">Email</label>
                <input type="email" id="input-label" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  mb-2.5" placeholder="you@site.com">

                <label for="input-label" class="block text-sm font-medium mb-2 ">Your Name</label>

                <input type="text" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none mb-2.5" placeholder="Readonly input" readonly>

                <label for="input-label" class="block text-sm font-medium mb-2 ">Name of Your Recipe</label>

                <input type="text" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none mb-2.5" placeholder="Readonly input" readonly>

                <label for="input-label" class="block text-sm font-medium mb-2 ">Description</label>

                <textarea class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  mb-1.5" rows="3"></textarea>

                <label for="input-label" class="block text-sm font-medium mb-2 ">Choose Your Recipe Image</label>

                <form>
                  <label class="block">
                    <span class="sr-only">Choose Your Recipe Image</span>
                    <input type="file" class="block w-full text-sm text-gray-500
                            file:me-4 file:py-2 file:px-4
                            file:rounded-lg file:border-0
                            file:text-sm file:font-semibold
                            file:bg-blue-600 file:text-white
                            hover:file:bg-blue-700
                            file:disabled:opacity-50 file:disabled:pointer-events-none
                          ">
                  </label>
                </form>
                <div class="text-center space-x-1.5">
                <button type="button" class=" py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent  bg-[#FF894D] text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none mt-5">
                  Submit
                </button>
                <router-link :to="{name:'Home'}">
                  <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-black hover:bg-white disabled:opacity-50 disabled:pointer-events-none">
                    Go Back
                  </button>
                  </router-link>
                </div>
              </div>
    </div>
        </div>
      </div>
    </section>
</template>

<style scoped>

</style>