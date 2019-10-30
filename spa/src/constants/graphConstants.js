import gql from 'graphql-tag';

export const GET_COMPANY = gql`
  query Company($id: ID!) {
    company (id: $id) {
      id
      name
      website
      country
      }
  }
`;

export const GET_COMPANIES = gql`
  {
    companies {
      id
      name
      website
      country
      }
  }
`;

export const CREATE_COMPANY = gql`
mutation CreateCompany($name: String!, $website: String, $country: String!) {
  CreateCompany(name: $name, website: $website, country: $country) {
    id
    name
    website
    country
  }
}
`;

export const UPDATE_COMPANY = gql`
mutation UpdateCompany($id: Int!, $name: String!, $website: String, $country: String!) {
  UpdateCompany(id: $id, name: $name, website: $website, country: $country) {
    id
    name
    website
    country
  }
}
`;

export const REMOVE_COMPANIES = gql`
mutation RemoveCompanies($Ids: [Int!]) {
  RemoveCompanies(Ids: $Ids) {
    result
  }
}
`;


export default {
  GET_COMPANY,
  GET_COMPANIES,
  CREATE_COMPANY,
  UPDATE_COMPANY,
};
