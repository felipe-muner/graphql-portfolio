import { getUsers } from "../graphql-client/github";

export default function Index({ users }) {
  const usersJSX = users.map((u) => <li key={u.id}>{u.id} - {u.login}</li>);

  return (
    <div>
      <ul>{usersJSX}</ul>
    </div>
  );
}

export async function getStaticProps() {
  const users = await getUsers();

  return {
    props: {
      users: users,
    },
  };
}
