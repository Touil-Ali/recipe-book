<script>
export default {
name: "SearchBar"
}
</script>

<template>
  <div class="w-2/4	">
    <label for="hs-search-box-with-loading-5" class="block text-sm font-medium mb-2 ">Search</label>
    <div class="relative flex rounded-lg shadow-sm">
      <input type="text" id="hs-search-box-with-loading-5" name="hs-search-box-with-loading-5" class="py-3 px-4 ps-11 block w-full border-[#FF914D] shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-[#FF914D]  focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " placeholder="Input search">
      <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
        <svg class="flex-shrink-0 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
      </div>
      <button type="button" class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-[#FF914D] text-white hover:bg-[#FF894D] disabled:opacity-50 disabled:pointer-events-none ">
      <span class="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading">
        <span class="sr-only">Loading...</span>
      </span>
        Search
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>