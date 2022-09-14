const { gql } = require('apollo-server-express');

const typeDefs = gql`  
  type User {
    username: String! 
    email: String!
    savedSets: [Set]
  }
  type Set {
    Item_Number: Int
    Name: String
    Year: Int
    Theme: String
    Pieces: String
    Image_URL: String
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
    saveSet(Item_Number: Int, Name: String, Year: Int, Theme: String, Pieces: Int, Image_URL: String): User
    removeSet(Item_Number: Int!): User
  }
`

module.exports = typeDefs;