import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import GRAPHQL_URI_BASE from '../constants/appConstants';

export default function createApolloClient() {

  const cache = new InMemoryCache()

  const httpLink = new HttpLink({
    uri: 'http://dev.cma.viz/',
  });


  return new ApolloClient({
    cache: cache,
    link: httpLink,
    resolvers: {},
  })

}
