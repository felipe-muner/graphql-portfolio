import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Todo {
    id: String
    text: String
    completed: Boolean
  }
  type Query {
<<<<<<< HEAD
    todos: [Todo]!
  }
  type Mutation {
    createTodo(text: String!):String
    removeTodo(id: String!):String
=======
    getUsers: [User]
    getUser(id: ID!): User!
>>>>>>> newmaster
  }
`;
