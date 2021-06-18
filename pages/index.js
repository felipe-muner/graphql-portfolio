import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { GET_USERS } from "../graphql-client/queries";

export default function Index() {
  const { loading, error, data } = useQuery(GET_USERS);

  const router = useRouter();

<<<<<<< HEAD
export default function Index() {
  return (
    <div><h1>oi</h1></div>
  )
}
=======
  const handleClick = async (user) => {
    router.push("/users/" + user.id);
  };

  if (error) throw error;
  if (loading) return <p>Loading ...</p>;

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
>>>>>>> newmaster
