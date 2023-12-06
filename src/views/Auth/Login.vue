<script>

export default {
  name: "Login",

  data() {
    return {
      email: "",
      password: "",
      showErrors: false
    }
  },
  onMounted() {
    if(this.$store.getters.isAuthenticated) {
      this.$router.push({ name: "Home" })
    }
  },
  methods: {
   onSubmit() {
    if(this.email === "" || this.password === "") {
      this.showErrors = true
    } else {
      this.showErrors = false
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password
      })
      .then(() => {
        this.$router.push({ name: "Home" })
      })
      .catch(() => {
        this.showErrors = true
      })
    }

   }
}}
</script>

<template>

  <section>
    <!-- Container -->
    <div class="mx-auto w-full max-w-3xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
      <!-- Component -->
      <div class="mx-auto max-w-xl bg-[#f2f2f7] px-8 py-12 text-center">
        <!-- Title -->
             <div class="mx-auto w-full max-w-[400px]">


          <!-- Form -->
          <div class="mx-auto mb-4 max-w-[400px] pb-4">
            <form name="wf-form-password"  method="POST">
            <h1 class="font-bold text-center text-2xl mb-5">Login </h1>
              <span v-if="showErrors" class="text-red-600 font-black mb-5">Please Fill The Form</span>
              <div class="relative">
                <img alt="" src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9455fae6cf89_EnvelopeSimple.svg" class="absolute left-[5%] top-[26%] inline-block" />
                <input type="email" v-model="email" class="mb-4 block h-9 w-full rounded-md border border-solid border-[#FF894D]  px-3 py-6 pl-14 text-sm text-[#333333]" placeholder="Email Address" />
              </div>
              <div class="relative mb-4">
                <img alt="" src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a946794e6cf8a_Lock-2.svg" class="absolute left-[5%] top-[26%] inline-block" />
                <input type="password" v-model="password" class="mb-4 block h-9 w-full rounded-md border border-solid border-[#FF894D] px-3 py-6 pl-14 text-sm text-[#333333]" placeholder="Password (min 8 characters)" />
              </div>
              <input type="submit" @click.prevent="onSubmit" value="Sign In" class="mt-4 inline-block w-full cursor-pointer items-center bg-[#FF894D] rounded-md bg-black px-6 py-3 text-center font-semibold text-white" />
            </form>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>