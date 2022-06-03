import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://nexthavensdouches.xyz`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-B0TD5G0B4E",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        //optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        //experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        //variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        //cookieDomain: "nexthavensdouches.xyz",
        // defaults to false
        enableWebVitalsTracking: true,
      },
    },
    "gatsby-plugin-cname",
  ],
};

export default config;
