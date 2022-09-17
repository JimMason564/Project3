const { gql } = require('apollo-server-express');

const typeDefs = gql`  
  type User {
    username: String! 
    email: String!
    # savedSets: [Set]
  }
  type Set {
    _id: ID
    item_number: Int
    name: String
    year: Int
    theme: String
    subtheme: String
    pieces: Int
    minifigures: Int
    image_url: String
  }

  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
    set: [Set]
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    # searchSets(_id: , Item_number: Int, Name: String, Year: Int, Theme: String, Subtheme: String, Pieces: Int, Minifigures: Int, Image: String): Set
    # saveSet(setID: [Int], name: String, number: Int, theme: String, year: Int, image: String): User
    # removeSet(setId: Int!): User
  }
`;

module.exports = typeDefs;