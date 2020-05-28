<template>
  <div>
    <a
      href="https://github.com/tailwindchunks/tailwindchunks"
      class="github-corner"
      aria-label="View source on GitHub"
      target="_blank"
      ><svg
        width="80"
        height="80"
        viewBox="0 0 250 250"
        style="fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;"
        aria-hidden="true"
      >
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
        <path
          d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
          fill="currentColor"
          style="transform-origin: 130px 106px;"
          class="octo-arm"
        ></path>
        <path
          d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
          fill="currentColor"
          class="octo-body"
        ></path></svg
    ></a>
    <div class="sidebar-wrapper">
      <div id="left-sidebar">
        <ul class="flex flex-col justify-start">
          <li v-for="(item, key) in sidebarMenu" :key="`sidebar-menu-${key}`">
            <template
              v-if="
                typeof item.children !== 'undefined' && item.children.length
              "
            >
              <span class="block px-5 py-2">
                {{ item.menu }}
              </span>
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
    <div class="main-body min-h-screen">
      <div class="container mx-auto px-5">
        <h1
          v-if="pageTitle"
          class="mt-10 mb-20 text-5xl text-gray-600 capitalize"
        >
          {{ pageTitle }}
        </h1>
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftSidebarLayout',
  data() {
    return {
      sidebarMenu: [
        {
          slug: '/',
          menu: 'Home'
        },
        {
          slug: '/about',
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
              slug: 'dropdown',
              menu: 'Dropdown'
            },
            {
              slug: 'form',
              menu: 'Form'
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
              slug: 'modal',
              menu: 'Modal'
            },
            {
              slug: 'navbar',
              menu: 'Navbar'
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
        }
      ]
    }
  },
  computed: {
    pageTitle() {
      const name = this.$route.name

      if (name !== 'index' && name !== null) {
        return name.split('-').pop()
      }

      return ''
    }
  },
  watch: {},
  beforeMount() {},
  mounted() {},
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
