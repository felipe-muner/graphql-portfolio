export default function Users({ user }) {
  console.log("felipe");
  return (
    <div>
      <h1>users {user.id}</h1>
    </div>
  );
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
  console.log("felipe2222");
  const userId = context.params.id;

  return {
    props: {
      user: {
        id: userId,
      },
    },
  };
}
