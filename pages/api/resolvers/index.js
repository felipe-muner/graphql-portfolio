const usersArray = [
  {
    id: "1",
    name: "felipe",
    login: "felipe-muner",
    avatar_url: "http://githubpicture",
  },
  {
    id: "2",
    name: "felipe2",
    login: "felipe-muner2",
    avatar_url: "http://githubpicture2",
  },
  {
    id: "3",
    name: "felipe3",
    login: "felipe-muner3",
    avatar_url: "http://githubpicture3",
  },
];

export const resolvers = {
  Query: {
    getUsers: async () => {
      const users = usersArray;
      return users;
    },
    getUser: async (_, args) => {
      console.log("args", args);
      const user = usersArray.find(
        (el) => parseInt(el.id) === parseInt(args.id)
      );
      return user;
    },
  },
};
