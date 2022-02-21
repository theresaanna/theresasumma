module.exports = {
  siteMetadata: {
      title: 'theresasumma.com',
    siteUrl: 'http://theresasumma.com'
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'rubik',
          'Roboto Serif'
        ],
        display: 'swap'
      }
    }
  ]
};
