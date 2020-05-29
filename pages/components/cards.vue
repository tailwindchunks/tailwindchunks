<template>
  <div>
    <div class="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3" />
    <markup
      v-for="(item, key) in items"
      :key="`item-${key}`"
      :title="item.title"
      :code="item.code"
    />
  </div>
</template>

<script>
import BasicCard from '~/components/html-markups/cards/basic-card.txt'
import WithImageCard from '~/components/html-markups/cards/with-image-card.txt'
import TimelineCard from '~/components/html-markups/cards/timeline-card.txt'

export default {
  layout: 'left-sidebar',
  data () {
    return {
      items: [
        {
          title: 'Basic card',
          code: BasicCard
        },
        {
          title: 'Card with image',
          code: WithImageCard
        },
        {
          title: 'Timeline style card',
          code: TimelineCard
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
