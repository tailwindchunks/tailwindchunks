<template>
  <div>
    Work in progress
    <!-- <markup
      v-for="(item, key) in items"
      :key="`item-${key}`"
      :title="item.title"
      :code="item.code"
    ></markup> -->
  </div>
</template>

<script>
import BasicCard from '~/components/html-markups/cards/basic-card.txt'

export default {
  layout: 'left-sidebar',
  data() {
    return {
      items: [
        {
          title: 'Basic card',
          code: BasicCard
        }
      ]
    }
  },
  computed: {},
  watch: {},
  beforeMount() {},
  mounted() {},
  methods: {}
}
</script>
