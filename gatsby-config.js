/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `central-computing`,
    siteUrl: `https://www.central.cx`,
    menuLinks:[
      {
        name: 'Contact',
        link: "mailto:birudeghi@gmail.com"
      },
      {
         name:'Book a demo',
         link:'/book'
      },
    ]
  },
  plugins: [
    "gatsby-plugin-mdx", 
    "gatsby-plugin-offline",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/static/images/icon.png',
      },
    },
    {
      resolve: "gatsby-plugin-styletron",
      options: {
        // You can pass options to Styletron.
        // Prefix all generated classNames:
        prefix: "_",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-mailgo",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/ // See below to configure properly
        }
      }
    }
]
};