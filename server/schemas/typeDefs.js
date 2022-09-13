const { gql } = require('apollo-server-express');

const typeDefs = gql`  
  type User {
    username: String! 
    email: String!
    savedSets: [Set]
  }
  type Set {
    setID: Int
    name: String
    number: Int
    theme: String
    year: String
    image: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveSet(setID: [Int], name: String, number: Int, theme: String, year: Int, image: String): User
    removeSet(setId: Int!): User
  }
`;

module.exports = typeDefs;