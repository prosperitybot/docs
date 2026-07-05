import { defineConfig } from 'vitepress'

const site = 'https://docs.prosperitybot.net'

export default defineConfig({
  lang: 'en-GB',
  title: 'Prosperity',
  description:
    'Documentation for Prosperity, a Discord levelling bot that rewards activity with XP, levels, and roles.',
  cleanUrls: true,
  lastUpdated: true,

  sitemap: {
    hostname: site
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'theme-color', content: '#157050' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Prosperity' }],
    ['meta', { property: 'og:url', content: site }],
    ['meta', { property: 'og:image', content: `${site}/og.svg` }]
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Prosperity',

    nav: [
      { text: 'Guide', link: '/guide/introduction', activeMatch: '/guide/' },
      { text: 'Commands', link: '/commands/', activeMatch: '/commands/' },
      { text: 'Reference', link: '/reference/permissions', activeMatch: '/reference/' },
      { text: 'Privacy', link: '/reference/privacy' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Getting started',
          items: [
            { text: 'Introduction', link: '/guide/introduction' },
            { text: 'Add Prosperity to your server', link: '/guide/getting-started' }
          ]
        },
        {
          text: 'Levelling',
          items: [
            { text: 'How levelling works', link: '/guide/how-levelling-works' },
            { text: 'Level roles', link: '/guide/levels-and-roles' },
            { text: 'Level-up notifications', link: '/guide/notifications' },
            { text: 'The leaderboard', link: '/guide/leaderboard' }
          ]
        },
        {
          text: 'Tuning XP',
          items: [
            { text: 'Ignoring channels and roles', link: '/guide/ignoring-channels-roles' }
          ]
        },
        {
          text: 'Premium',
          items: [
            { text: 'Whitelabel bots', link: '/guide/whitelabel' },
            { text: 'Intents request guide', link: '/guide/whitelabel-intents' }
          ]
        }
      ],
      '/commands/': [
        {
          text: 'Command reference',
          items: [
            { text: 'Overview', link: '/commands/' },
            { text: 'General', link: '/commands/general' },
            { text: 'Level roles', link: '/commands/level-roles' },
            { text: 'Ignored channels and roles', link: '/commands/ignored' },
            { text: 'Settings', link: '/commands/settings' },
            { text: 'XP and levels (admin)', link: '/commands/admin-xp-levels' },
            { text: 'Whitelabel', link: '/commands/whitelabel' }
          ]
        }
      ],
      '/reference/': [
        {
          text: 'Reference',
          items: [
            { text: 'Required permissions', link: '/reference/permissions' },
            { text: 'Intents and data', link: '/reference/intents-and-data' },
            { text: 'Privacy and data retention', link: '/reference/privacy' }
          ]
        },
        {
          text: 'Operators',
          items: [
            { text: 'Architecture', link: '/self-hosting/architecture' },
            { text: 'Deployment', link: '/self-hosting/deployment' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/prosperitybot' }
    ],

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/prosperitybot/docs/edit/main/:path',
      text: 'Suggest a change to this page'
    },

    footer: {
      message: 'Operated by BH Cloud Labs Ltd.',
      copyright: 'Copyright 2026 BH Cloud Labs Ltd'
    }
  }
})
