import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/home/deep/www/web7/paas.dev/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/home/deep/www/web7/paas.dev/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
