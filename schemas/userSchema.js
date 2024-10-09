const { gql } = require('apollo-server-express');

const userSchema = gql`
  type User {
    id: ID!
    email: String!
    password: String!
    name: String!
    profilePic: String
    bio: String
    createdAt: String
    updatedAt: String
  }

  type Query {
    users: [User]
  }

  type Mutation {
    createUser(email: String!, password: String!, name: String!, bio: String): User
  }
`;

module.exports = userSchema;