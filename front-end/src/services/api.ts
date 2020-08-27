import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

export const link = createHttpLink({
  uri: 'http://localhost:3333/graphql',
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});
