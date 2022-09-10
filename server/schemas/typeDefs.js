const { gql } = require('apollo-server-express');

const typeDefs = gql`  
  type User {
    username: String! 
    email: String!
    savedSets: [Set]
  }
  type Set {
    setID: Number
    name: String
    number: Number
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
    saveSet(setID: [Number], name: String, number: Number, theme: String, year: Number, image: String): User
    removeSet(setId: Number!): User
  }
`;

module.exports = typeDefs;