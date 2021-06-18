import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type User {
    id: ID
    name: String
    login: String
    avatar_url: String
  }

  type Query {
    getUsers: [User]
    getUser(id: ID!): User!
  }
`;
