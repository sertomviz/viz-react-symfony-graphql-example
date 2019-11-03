import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import {GRAPHQL_URI_BASE} from '../constants/appConstants';
import CompanyList from './CompanyList'



const cache = new InMemoryCache()

cache.writeData({
  data: {
    alerts: [],
  },
});

// Context for React Apollo
const httpLink = new HttpLink({
  uri: GRAPHQL_URI_BASE,
});

const client = new ApolloClient({
  cache: cache,
  link: httpLink,
  resolvers: {},
})

class CompaniesPage extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <CompanyList />
        </div>
      </ApolloProvider>
    );
  }
}

export default CompaniesPage
