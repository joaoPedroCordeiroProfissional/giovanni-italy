/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
// const siteMetaData = require("./config/metadata")

module.exports = {
  siteMetadata: {
    title: 'GDF Housing - Rental Solutions',
    siteUrl: 'https://www.gdfhousing.com',
    description: `Your time saver when searching rents, homes or apartments. Your trustworthy real estate agent is right here!`,
    author: 'GDF Housing',
    copyright: "© 2021 Copyright: GDF",
    keywords: 'real state, property, rental, summer rental, cheap rental',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== "production",
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.gdfhousing.com`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
      },
    },
  ],
}
