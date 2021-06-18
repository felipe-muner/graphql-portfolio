import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const GET_USERS = gql`
  query {
    getUsers {
      id
      login
      name
      avatar_url
    }
  }
`;

export default function Index() {
  const { loading, error, data } = useQuery(GET_USERS);

  const router = useRouter();

  const handleClick = async (user) => {
    router.push("/users/" + user.id);
  };

  if (error) throw error;
  if (loading) return <p>Loading ...</p>;

  // console.log(data.getUsers)
  const userList = data.getUsers.map((el) => (
    <li key={el.id}>
      <button onClick={() => handleClick(el)}> Get info</button> {el.id} -{" "}
      {el.name}
    </li>
  ));

  return <div>{userList}</div>;
}

// export async function getStaticProps() {
//   const users = await getUsers();

//   return {
//     props: {
//       users: users,
//     },
//   };
// }
