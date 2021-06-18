import { getUsers, getUser } from "../graphql-client/github";

export default function Index({ users }) {
  console.log(users)
  // const handleClick = async (user) => {
  //   const u = await getUser(user)
  //   console.log(u)
  // };
  // const usersJSX = users?.map((u) => (
  //   <li key={u.id}>
  //     <button onClick={() => handleClick(u)}> Get info</button>
  //     {u.id} - {u.login}
  //   </li>
  // ));

  return (
    <div>
      {/* <ul>{usersJSX}</ul> */}
    </div>
  );
}

export async function getStaticProps() {
  const users = await getUsers();
  console.log(users)

  return {
    props: {
      users: users,
    },
  };
}
