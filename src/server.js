const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphql/schemas');
const resolvers = require('./graphql/resolvers');

// Connect to DB.
mongoose.connect(`mongodb://127.0.0.1:27017/tanks`, { useUnifiedTopology: true, useNewUrlParser: true })

// Combind Modular Schema && Resolver.
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
})
 
const app = express();
apolloServer.applyMiddleware({ app });

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}${apolloServer.graphqlPath}`));