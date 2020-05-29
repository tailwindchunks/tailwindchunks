<template>
  <div>
    <GithubCorner />
    <div class="sidebar-wrapper">
      <div id="left-sidebar">
        <ul class="flex flex-col justify-start">
          <li v-for="(item, key) in sidebarMenu" :key="`sidebar-menu-${key}`">
            <template
              v-if="typeof item.children !== 'undefined' && item.children.length"
            >
              <span class="bg-gray-100 block px-5 py-2 text-gray-600">{{ item.menu }}</span>
              <ul class="flex flex-col justify-start">
                <li
                  v-for="(child, childKey) in item.children"
                  :key="`sidebar-menu-${childKey}`"
                >
                  <nuxt-link
                    class="block px-10 py-2"
                    :to="`${item.slug}/${child.slug}`"
                  >
                    {{ child.menu }}
                  </nuxt-link>
                </li>
              </ul>
            </template>
            <template v-else>
              <nuxt-link class="block px-5 py-2" :to="item.slug">
                {{ item.menu }}
              </nuxt-link>
            </template>
          </li>
        </ul>
      </div>
    </div>
    <div class="bg-gray-100 main-body min-h-screen">
      <div class="container mx-auto px-5">
        <h1
          v-if="pageTitle"
          class="mt-10 mb-20 text-5xl text-blue-500 capitalize"
        >
          {{ pageTitle }}
        </h1>
        <nuxt />
      </div>
    </div>

    <div class="footer w-full bg-white bottom-0 fixed footer py-2 text-center z-10">
      MIT Licensed | Copyright © 2020 - Present Jeric
    </div>
  </div>
</template>

<script>

import GithubCorner from '~/components/GithubCorner'

export default {
  name: 'LeftSidebarLayout',
  components: {
    GithubCorner
  },
  data () {
    return {
      sidebarMenu: [
        {
          slug: '/',
          menu: 'About'
        },
        {
          slug: '/components',
          menu: 'Components',
          children: [
            {
              slug: 'alerts',
              menu: 'Alerts'
            },
            {
              slug: 'breadcrumbs',
              menu: 'Breadcrumbs'
            },
            {
              slug: 'buttons',
              menu: 'Buttons'
            },
            {
              slug: 'cards',
              menu: 'Cards'
            },
            {
              slug: 'dropdowns',
              menu: 'Dropdowns'
            },
            {
              slug: 'forms',
              menu: 'Forms'
            },
            {
              slug: 'input',
              menu: 'Input'
            },
            {
              slug: 'list',
              menu: 'list'
            },
            {
              slug: 'modals',
              menu: 'Modals'
            },
            {
              slug: 'navbars',
              menu: 'Navbars'
            },
            {
              slug: 'pagination',
              menu: 'Pagination'
            },
            {
              slug: 'progress',
              menu: 'Progress'
            },
            {
              slug: 'toast',
              menu: 'Toast'
            }
          ]
        },
        {
          slug: '/templates',
          menu: 'Templates',
          children: [
            {
              slug: 'landing-page',
              menu: 'Landing page'
            }
          ]
        }
      ]
    }
  },
  computed: {
    pageTitle () {
      const { path } = this.$route

      if (path !== 'index' && path !== null) {
        return path.split('/').pop()
      }
      return ''
    }
  },
  watch: {},
  beforeMount () {},
  mounted () {},
  methods: {}
}
</script>
<style>
body {
  overflow-y: scroll;
}
.github-corner {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 20;
}
</style>
<style lang="scss" scoped>
.sidebar-wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  background-size: cover;
  background-position: center center;
  transition: 0.2s;

  #left-sidebar {
    position: relative;
    overflow: auto;
    width: 260px;
    z-index: 4;
    height: 100vh;
    background: #fff;
    border-right: 1px solid #fafafa;
  }
}

.main-body {
  position: relative;
  z-index: 2;
  float: right;
  width: calc(100% - 260px);
}
</style>
