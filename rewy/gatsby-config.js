/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */


// ✅ VERY IMPORTANT (ENV LOAD)
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});


/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Vivacious Solutions`,
    description: `IT & Digital Marketing Company`,
    author: `Vivacious Solutions`,
    siteUrl: `https://www.vivacioussolutions.in`,
  },
  plugins: [
    `gatsby-plugin-image`,
    "gatsby-transformer-remark",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vivacious Solutions`,
        short_name: `Vivacious`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
