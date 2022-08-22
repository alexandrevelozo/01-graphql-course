const post = () => {
  return {
    id: '1',
    title: 'GraphQL é uma linguagem de programação',
  };
};

const posts = () => {
  return [
    {
      id: '1',
      title: 'GraphQL é uma linguagem de programação',
    },
    {
      id: '2',
      title: 'Apollo é uma biblioteca para GraphQL',
    },
    {
      id: '3',
      title: 'Apollo é uma biblioteca para GraphQL',
    },
  ];
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
