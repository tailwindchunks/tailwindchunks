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
import BasicAlert from '~/components/html-markups/alerts/basic-alert.txt'
import BorderedAlert from '~/components/html-markups/alerts/bordered-alert.txt'
import WithIconAlert from '~/components/html-markups/alerts/with-icon-alert.txt'

export default {
  layout: 'left-sidebar',
  data () {
    return {
      items: [
        {
          title: 'Basic alerts',
          code: BasicAlert
        },
        {
          title: 'Bordered alerts',
          code: BorderedAlert
        },
        {
          title: 'With icon alerts',
          code: WithIconAlert
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
