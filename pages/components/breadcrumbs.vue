<template>
  <div>
    <markup
      v-for="(item, key) in items"
      :key="`item-${key}`"
      :title="item.title"
      :code="item.code"
    />
  </div>
</template>

<script>
import BasicBreadcrumb from '~/components/html-markups/breadcrumbs/basic-breadcrumb.txt'

export default {
  layout: 'left-sidebar',
  data () {
    return {
      items: [
        {
          title: 'Basic breadcrumb',
          code: BasicBreadcrumb
        }
      ]
    }
  },
  computed: {},
  watch: {},
  beforeMount () {},
  mounted () {},
  methods: {}
}
</script>
