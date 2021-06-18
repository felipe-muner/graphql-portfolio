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
          id
          login
          name
          avatar_url
        }
      }
    `,
  });
  return data.getUsers;
}

export async function getUser(user) {
  console.log("getuser ", user);
  const { data } = await client.query({
    query: gql`
      query {
        getUser(name: "felipe") {
          login
          id
          avatar_url
        }
      }
    `,
  });
  console.log("getUser fetched", data.getUser);
  return data.getUser;
}
