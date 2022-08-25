const users = async (_, { input }, { getUsers }) => {
  const apiFiltersInput = new URLSearchParams(input);
  const users = await getUsers(`/?${apiFiltersInput}`);
  return users.json();
};

const user = async (_, { id }, { getUsers }) => {
  const user = await getUsers('/' + id);
  return user.json();
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
