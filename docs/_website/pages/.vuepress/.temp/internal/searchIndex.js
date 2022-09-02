export const searchIndex = [
  {
    "title": "Kubernetes Native Development Platform",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Company",
    "headers": [
      {
        "level": 2,
        "title": "Maintainers",
        "slug": "maintainers",
        "children": []
      }
    ],
    "path": "/company/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Developers",
    "headers": [
      {
        "level": 2,
        "title": "Installation",
        "slug": "installation",
        "children": []
      },
      {
        "level": 2,
        "title": "Configuration",
        "slug": "configuration",
        "children": []
      },
      {
        "level": 2,
        "title": "Modules",
        "slug": "modules",
        "children": []
      }
    ],
    "path": "/developers/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Platform",
    "headers": [
      {
        "level": 2,
        "title": "PaaS Studio",
        "slug": "paas-studio",
        "children": []
      },
      {
        "level": 2,
        "title": "Open Source",
        "slug": "open-source",
        "children": []
      },
      {
        "level": 2,
        "title": "Features",
        "slug": "features",
        "children": []
      }
    ],
    "path": "/platform/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Why paas.dev?",
    "headers": [],
    "path": "/why/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
