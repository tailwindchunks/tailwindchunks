<template>
  <div class="home-page">
    <h1 class="mt-10 mb-5 mx-auto text-5xl text-blue-500">
      Tailwind Chunks
    </h1>
    <h2>Collections of tailwindcss components</h2>

    <nuxt-link
      class="bg-blue-400 border border-blue-500 hover:bg-blue-500 m-10 m-2 px-8 py-2 rounded text-2xl text-white"
      to="/about"
    >
      Get Started
    </nuxt-link>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  components: {
    // Logo
  }
}
</script>

<style scoped>
.home-page{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}
</style>
