import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3000/api/graphql",
  cache: new InMemoryCache(),
});

export async function getUsers() {
  const { data } = await client.query({
    query: gql`
      {
        getUsers {
          login
          id
          avatar_url
        }
      }
    `,
  });

  return data.getUsers;
}
