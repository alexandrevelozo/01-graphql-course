import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      user: User!
      users: [User!]!
    }

    type User {
      id: ID!
      userName: String!
    }
  `,
  resolvers: {
    Query: {
      user: () => {
        return {
          id: '4545454544q',
          userName: 'Alexandre Velozo',
        };
      },
      users: () => {
        return [
          {
            id: '4545454544q',
            userName: 'Alexandre Velozo',
          },
          {
            id: 'dewde1d111',
            userName: 'Maria Eduarda',
          },
        ];
      },
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
