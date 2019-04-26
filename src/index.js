const { prisma } = require('./generated/prisma-client');
const { GraphQLServer } = require('graphql-yoga');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers: {
    Query,
    Mutation,
  },
  context: {
    prisma,
  },
});

server.start(() => console.log('Server is running on http://localhost:4000'));
