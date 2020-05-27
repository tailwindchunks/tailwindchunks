<template>
  <div>
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
    <div class="main-body">
      <div class="px-5">
        <h1 class="mt-5 text-5xl text-gray-500">Components</h1>
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
              slug: 'breadcrumb',
              menu: 'Breadcrumb'
            },
            {
              slug: 'card',
              menu: 'Card'
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
  computed: {},
  watch: {},
  beforeMount() {},
  mounted() {},
  methods: {}
}
</script>

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
