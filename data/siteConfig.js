module.exports = {
  siteTitle: 'Elvis Rouge',
  siteDescription: "¡👋 Gidday I'm Gas!",
  authorName: 'Gas',
  twitterUsername: '_agasson',
  authorAvatar: '/images/avatar.jpeg',
  multilangPosts: true, // enable/disable flags in post lists
  authorDescription: `
  For the last 1/2 decade, Andrés Gasson has worked with a variety of web technologies. He is currently focused on front-end development.
  On his day to day job, he is working as a devops  engineer at Atea. He is also a frequent tech speaker and a mentor.
  As a new digital nomad, he is living where the WIFI and sun is 😎 <br>
  Do you want to know more? <a href="https://www.red-elvis.net/about" target="_blank">Visit my website!</a>
  `,
  siteUrl: 'https://www.red-elvis.net/',
  disqusSiteUrl: 'https://www.red-elvis.net/',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/gatsby-starter-morning-dew', // Note: it must *not* have a trailing slash.
  siteCover: '/images/ghostmtn.jpg',
  googleAnalyticsId: 'UA-67868977-1',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  postsPerPage: 6,
  disqusShortname: 'frap',
  headerLinks: [
    {
      label: '🏡',
      url: '/',
    },
    {
      label: 'Blog',
      url: '/',
    },
    {
      label: 'About',
      url: '/gatsby-starter-morning-dew',
    },
    {
      label: 'Installation',
      url: '/how-to-install',
    },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    [
      'Explore',
      {
        label: 'Blog',
        url: '/',
      },
      {
        label: 'About',
        url: '/gatsby-starter-morning-dew',
      },
      {
        label: 'Installation',
        url: '/how-to-install',
      },
    ],
    [
      'Follow the author',
      {
        label: 'Github',
        url: 'https://github.com/frap/',
        iconClassName: 'fa fa-github',
      },
      {
        label: 'Website',
        url: 'https://www.red-elvis.net',
        iconClassName: 'fa fa-globe',
      },
      {
        label: 'Twitter',
        url: 'https://twitter.com/_agasson',
        iconClassName: 'fa fa-twitter',
      },
    ],
  ],
}
