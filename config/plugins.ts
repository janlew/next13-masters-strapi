export default {
  seo: {
    enabled: true,
  },
  "generate-data": {
    enabled: true,
  },
  // graphql should be the last
  graphql: {
    config: {
      generateArtifacts: true,
      artifacts: {
        schema:
          "C:/Users/ACER/Desktop/Jan/next13-masters-strapi/gql/graphql_schema.graphql",
        typegen:
          "C:/Users/ACER/Desktop/Jan/next13-masters-strapi/gql/graphql_types.d.ts",
      },
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 8,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
};
