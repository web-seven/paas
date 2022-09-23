import { defineUserConfig, defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'

export default defineUserConfig({
    lang: 'en-US',
    title: 'PaaS.dev',
    description: 'Kubernetes Native Development Platfrom',
    dest: 'docs/dist/website',
    theme: defaultTheme({
        logo: '/images/paas_logo.svg',
        contributors: false,
        lastUpdated: false,
        navbar: [
            {
                text: 'Guide',
                children: [
                    { text: 'Overview', link: '/guide/overview'},
                    { text: 'Features', link: '/guide/features'},
                    { text: 'Installation', link: '/guide/installation'},
                ],
            },
            {
                text: 'Modules',
                children: [
                    { 
                        text: 'Development', link: '/modules/development',
                        children: [
                            { text: 'Hybrid IDE', link: '/modules/development/ide'},
                            { text: 'Source Repository', link: '/modules/development/source-repository'},
                        ],
                    },
                    { 
                        text: 'Building',
                        children: [
                            { text: 'Containers', link: '/modules/composition/containers'},
                            { text: 'Helm Charts', link: '/modules/composition/helm-charts'},
                        ],
                    },
                    { 
                        text: 'Pipelines',
                        children: [
                            { text: 'GitHub', link: '/modules/pipelines/github'},
                            { text: 'Bitbucket', link: '/modules/pipelines/bitbucket'},
                            { text: 'Webhook', link: '/modules/pipelines/webhook'},
                        ]
                    },
                    { 
                        text: 'Testing',
                        children: [
                            { text: 'Unit', link: '/modules/testing/unit'},
                            { text: 'Integration', link: '/modules/testing/integration'},
                            { text: 'E2E', link: '/modules/testing/e2e'},
                        ]
                    },
                    { 
                        text: 'Deployment',
                        children: [
                            { text: 'Kubernetes Cluster', link: '/modules/delivery/k8s-cluster'},
                        ]
                    },
                    { 
                        text: 'Monitoring',
                        children: [
                            { text: 'Performance', link: '/modules/monitoring/performance'},
                            { text: 'WebPageTest', link: '/modules/monitoring/webpagetest'},
                            { text: 'Tracing', link: '/modules/monitoring/tracing'},
                        ]
                    },
                ],
            },
            {
                text: 'Cloud Studio',
                link: '/studio',
            },
            {
                text: 'Communitiy',
                link: 'https://github.com/web-seven/paas/discussions',
            },
            {
                text: 'Company',
                link: '/company',
            },
            {
                text: 'GitHub',
                link: 'https://github.com/web-seven/paas',
            },
        ],
    }),
    plugins: [
        backToTopPlugin(),
        searchPlugin({
            // options
        }),
    ]
})