<template>
  <div>
    <markup
      v-for="(item, key) in items"
      :key="`item-${key}`"
      :title="item.title"
      :code="item.code"
    ></markup>
  </div>
</template>

<script>
import BasicButtons from '~/components/html-markups/buttons/basic-button.txt'
import OutlinedButtons from '~/components/html-markups/buttons/outlined-button.txt'
import WithIconButtons from '~/components/html-markups/buttons/with-icon-button.txt'
import RoundedButtons from '~/components/html-markups/buttons/rounded-button.txt'

export default {
  layout: 'left-sidebar',
  data() {
    return {
      items: [
        {
          title: 'Basic buttons',
          code: BasicButtons
        },
        {
          title: 'Outlined buttons',
          code: OutlinedButtons
        },
        {
          title: 'With icon buttons',
          code: WithIconButtons
        },
        {
          title: 'Rounded buttons',
          code: RoundedButtons
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
