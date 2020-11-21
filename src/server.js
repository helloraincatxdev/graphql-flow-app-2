const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphql/schemas');
const resolvers = require('./graphql/resolvers');

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
})
 
const app = express();
apolloServer.applyMiddleware({ app });

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}${apolloServer.graphqlPath}`));