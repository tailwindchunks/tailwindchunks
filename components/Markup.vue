<template>
  <div class="border-b-2 border-gray-200 mb-20 pb-16">
    <button
      class="float-right bg-blue-100 border-2 hover:bg-blue-500 hover:border-blue-500 hover:text-white px-4 py-2 rounded-md text-sm"
      @click="showCode = !showCode"
    >
      {{ toggleButtonText }}
    </button>
    <h2 class="my-5 mb-12 text-2xl text-gray-700">{{ title }}</h2>

    <div
      v-if="showCode"
      class="code-wrapper code-wrapper mt-6 shadow-lg text-sm overflow-x-auto"
    >
      <pre v-highlightjs="code"><code class="html"></code></pre>
    </div>

    <div class="preview" v-html="code"></div>
  </div>
</template>

<script>
export default {
  name: 'Markup',
  props: {
    title: { type: String, default: '' },
    code: { type: String, default: '' }
    // number: { type: Number, default: 0 },
    // array: { type: Array, default: () => [] },
    // object: { type: Object, default: () => ({}) },
    // boolean: { type: Boolean, default: false }
  },
  data() {
    return {
      showCode: false
    }
  },
  computed: {
    toggleButtonText() {
      return (this.showCode ? 'Hide' : 'View') + ' source'
    }
  },
  watch: {},
  beforeMount() {},
  mounted() {},
  methods: {}
}
</script>
<style scoped>
.code-wrapper {
  max-height: 350px;
}
</style>
