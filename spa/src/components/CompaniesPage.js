import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import {GRAPHQL_URI_BASE} from '../constants/appConstants';
import CompanyList from './CompanyList'


const cache = new InMemoryCache(
  {
    companies: [],
  }
)

// Context for React Apollo
const httpLink = new HttpLink({
  uri: GRAPHQL_URI_BASE,
});

// Helper function to get data from the cache
const getState = (query) => {
    return cache.readQuery<IRoot>({ query }).state;
};

// Helper function to write data back to the cache
const writeState = (state) => {
    return cache.writeData({ data: { state } });
};


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
