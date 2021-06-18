let todos = [
  {
<<<<<<< HEAD
    id: 0,
    text: 'Hello from GraphQL',
    completed: false,
=======
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
>>>>>>> newmaster
  },
];

export const resolvers = {
  Query: {
<<<<<<< HEAD
    todos: () => todos,
  },
  Mutation: {
    createTodo: (parent, args, context, info) => {
      return todos.push({
        id: Date.now().toString(),
        text: args.text,
        completed: false,
      });
    },
    removeTodo: (parent, args, context, info) => {
      for (let i in todos) {
        if (todos[i].id === args.id) {
          todos.splice(i, 1);
        }
      }
      return args.id;
=======
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
>>>>>>> newmaster
    },
  },
};
