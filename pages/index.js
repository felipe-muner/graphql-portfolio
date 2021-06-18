import { getUsers, getUser } from "../graphql-client/github";
import { useRouter } from "next/router";

export default function Index({ users }) {
  const router = useRouter();

  const handleClick = async (user) => {
    router.push("/users/" + user.id);
  };
  const usersJSX = users?.map((u) => (
    <li key={u.id}>
      <button onClick={() => handleClick(u)}> Get info</button> {u.id} {u.name}
    </li>
  ));

  return (
    <div>
      <ul>{usersJSX}</ul>
    </div>
  );
}

// export async function getStaticProps() {
//   const users = await getUsers();

//   return {
//     props: {
//       users: users,
//     },
//   };
// }
