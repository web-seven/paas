export const themeData = JSON.parse("{\"logo\":\"/images/paas_logo.svg\",\"contributors\":false,\"lastUpdated\":false,\"navbar\":[{\"text\":\"Home\",\"link\":\"/\"},{\"text\":\"Features\",\"link\":\"/why\"},{\"text\":\"Platform\",\"link\":\"/platform\",\"children\":[{\"text\":\"Development\",\"link\":\"/developers\"},{\"text\":\"Composition\",\"link\":\"/developers\"},{\"text\":\"Pipelines\",\"link\":\"/developers\"},{\"text\":\"Deployments\",\"link\":\"/developers\"},{\"text\":\"Monitoring\",\"link\":\"/developers\"},{\"text\":\"Tracing\",\"link\":\"/developers\"},{\"text\":\"Automations\",\"link\":\"/developers\"},{\"text\":\"Hybrid IDE\",\"link\":\"/developers\"}]},{\"text\":\"Modules\",\"link\":\"/modules\"},{\"text\":\"Cloud Studio\",\"link\":\"/studio\"},{\"text\":\"Communitiy\",\"link\":\"https://github.com/web-seven/paas/discussions\"},{\"text\":\"Company\",\"link\":\"/company\"},{\"text\":\"GitHub\",\"link\":\"https://github.com/web-seven/paas\"}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdatedText\":\"Last Updated\",\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
