/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
        resolve: "gatsby-source-strapi-api-v",
        options: {
            apiURL: process.env.NODE_ENV === 'development' ? 'http://localhost:1337' : 'http://101.43.210.74:1337',
            collectionTypes: [
                "post",
                "tag",
            ],
            queryLimit: 1000,
            loginData: {
                identifier: "",
                password: "",
            },
        }
    },
    {
        resolve: 'gatsby-plugin-sass'
    }
  ],
}
