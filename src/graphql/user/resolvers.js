const user = () => {
  return {
    id: '1',
    userName: 'Alexandre Velozo',
  };
};

const users = () => {
  return [
    {
      id: '1',
      userName: 'Alexandre Velozo',
    },
    {
      id: '2',
      userName: 'Maria Eduarda',
    },
    {
      id: '3',
      userName: 'Cristiane dos Santos Velozo',
    },
  ];
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
