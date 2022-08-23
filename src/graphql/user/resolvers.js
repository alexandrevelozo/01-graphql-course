const user = async (_, { id }, { fetch }) => {
  const user = await fetch(`http://localhost:3000/users/${id}`);
  return user.json();
};

const users = async (_, __, { fetch }) => {
  const response = await fetch('http://localhost:3000/users');
  const user = await response.json();
  return user;
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
