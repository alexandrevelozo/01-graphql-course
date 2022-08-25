import { gql } from 'apollo-server';
import { apiFiltersResolvers } from './apí-filters/resolvers';
import { apiFiltersTypeDefs } from './apí-filters/typeDefs';

import { postResolvers } from './post/resolvers';
import { postTypeDefs } from './post/typedefs';

import { userResolvers } from './user/resolvers';
import { userTypeDefs } from './user/typedefs';

const rootTypeDefs = gql`
  type Query {
    _empty: Boolean
  }
`;

const rootResolvers = {
  Query: {
    _empty: () => 'true',
  },
};

export const typeDefs = [
  rootTypeDefs,
  userTypeDefs,
  postTypeDefs,
  apiFiltersTypeDefs,
];
export const resolvers = [
  rootResolvers,
  userResolvers,
  postResolvers,
  apiFiltersResolvers,
];
