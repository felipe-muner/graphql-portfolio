import { gql, useQuery } from "@apollo/client";

const GET_USER = gql`
  query ($id: ID!) {
    getUser(id: $id) {
      id
      login
      name
      avatar_url
    }
  }
`;

export default function Users({ user }) {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id: parseInt(user.id) },
  });

  if( error) console.log(error)
  if (loading) return <p>Loading ...</p>;
  return <h1>Hello {JSON.stringify(data)}!</h1>;
}

export async function getStaticPaths() {
  //use this one if its dynamic[:id] and you have getStaticProps getting data on serverside..
  return {
    fallback: false, //generate and get then dynamically
    //false says you have all path made already
    paths: [
      {
        params: {
          id: "1",
        },
      },
      {
        params: {
          id: "2",
        },
      },
      {
        params: {
          id: "3",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const userId = context.params.id;

  return {
    props: {
      user: {
        id: userId,
      },
    },
  };
}
