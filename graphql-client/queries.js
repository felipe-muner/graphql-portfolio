import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://localhost:3000/api/graphql",
  cache: new InMemoryCache(),
});

export const GET_USERS = gql`
  {
    getUsers {
      id
      login
      name
      avatar_url
    }
  }
`;

export const GET_USER = gql`
  query ($id: ID!) {
    getUser(id: $id) {
      id
      login
      name
      avatar_url
    }
  }
`;
