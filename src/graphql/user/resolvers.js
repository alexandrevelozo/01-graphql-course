const users = async (_, __, { getUsers }) => {
  const response = await getUsers();
  const users = await response.json();
  return users;
};

const user = async (_, { id }, { getUsers }) => {
  const response = await getUsers('/' + id);
  const user = await response.json();
  return user;
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
