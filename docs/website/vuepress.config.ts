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
                text: 'Home',
                link: '/',
            },
            {
                text: 'Platform',
                link: '/platform',
            },
            {
                text: 'Modules',
                link: '/modules',
                children: [
                    { text: 'Development', link: '/developers'},
                    { text: 'Composition', link: '/developers'},
                    { text: 'Pipelines', link: '/developers'},
                    { text: 'Deployments', link: '/developers'},
                    { text: 'Monitoring', link: '/developers'},
                    { text: 'Tracing', link: '/developers'},
                    { text: 'Automations', link: '/developers'},
                    { text: 'Hybrid IDE', link: '/developers'},
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