const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Tank {
        name: String
        country: String
    }
    type Query {
        hello: String
        getAllTanks: [Tank]
        getTank (id: ID!): Tank 
    }
`

module.exports = typeDefs;