/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Fábrica de testes Great",
    description: "Empresa de testes com sede na Universidade Federal do Ceará",
    author: "Fábrica de Testes",
    siteUrl: "https://test-factory-great.netlify.app",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/articles`,
      },
    },
    // In your gatsby-config.js
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fábrica de Testes`,
        short_name: `FT - Great`,
        start_url: `/`,
        background_color: `#001f3b`,
        theme_color: `#001f3b`,
        display: `minimal-ui`,
        icon: `src/assets/logoIcon.png`
      },
    },
    `gatsby-plugin-netlify-cms`
  ],
}
