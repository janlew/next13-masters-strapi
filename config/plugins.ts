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
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 12,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
};
