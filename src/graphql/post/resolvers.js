const posts = async (_, { input }, { getPosts }) => {
  const apiFiltersInput = new URLSearchParams(input);
  const posts = await getPosts(`/?${apiFiltersInput}`);
  return posts.json();
};

const post = async (_, { id }, { getPosts }) => {
  const post = await getPosts('/' + id);
  return post.json();
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
  Post: {
    unixTimestamp: () => {
      const date = new Date().getTime() / 1000;
      return Math.floor(date);
    },
  },
};
