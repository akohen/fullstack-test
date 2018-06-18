import { ApolloServer } from 'apollo-server';
import resolvers from './resolvers';
import typeDefs from './schema';
import { properties, clients } from './data';

const server = new ApolloServer({ typeDefs, resolvers, context: { properties, clients } });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
