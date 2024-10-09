const { gql } = require('apollo-server-express');

const recipeSchema = gql`
  type Recipe {
    id: ID!
    userId: ID!
    title: String!
    description: String!
    ingredients: String!
    instructions: String!
    images: [String]
    cuisine: String!
    prepTime: String!
    cookTime: String!
    servings: String!
    createdAt: String
    updatedAt: String
  }

  type Query {
    recipes: [Recipe]
  }

  type Mutation {
    createRecipe(
      userId: ID!
      title: String!
      description: String!
      ingredients: String!
      instructions: String!
      images: [String]
      cuisine: String!
      prepTime: String!
      cookTime: String!
      servings: String!
    ): Recipe
    updateRecipe(
      id: ID!
      userId: ID!
      title: String!
      description: String!
      ingredients: String!
      instructions: String!
      images: [String]
      cuisine: String!
      prepTime: String!
      cookTime: String!
      servings: String!
    ): Recipe
  }
`;

module.exports = recipeSchema;