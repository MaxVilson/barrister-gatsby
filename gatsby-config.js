require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "Адвокат Гуменюк Светлана Анатольевна",
    description: "Адвокат по уголовным делам Гуменюк Светлана Анатольевна",
    author: "Maxim Vavilkin"
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        environment: process.env.DATO_ENVIRONMENT,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
