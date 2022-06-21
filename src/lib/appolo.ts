import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4nnwbdk0i7e01xo9jdh2hb2/master",
  cache: new InMemoryCache(),
});
