const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Country {
        countryName: String
        tanks: [Tank]
    }
    type Tank {
        name: String
        country: String
    }
    type Query {
        hello: String
        getAllTanks: [Tank]
        getTank (id: ID!): Tank 
        getTanksByCountry (countryName: String): Country
    }
`

module.exports = typeDefs;