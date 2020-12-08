import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `bearer ${process.env.GIT_TOKEN}`
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;