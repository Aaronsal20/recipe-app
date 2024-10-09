const Recipe = require('../models/Recipe');

const recipeResolver = {
  Query: {
    recipes: async () => {
      return await Recipe.find({});
    },
  },
  Mutation: {
    createRecipe: async (_, { userId, title, description, ingredients, instructions, images, cuisine, prepTime, cookTime, servings }) => {
      const recipe = new Recipe({ userId, title, description, ingredients, instructions, images, cuisine, prepTime, cookTime, servings });
      await recipe.save();
      return recipe;
    },
    updateRecipe: async (_, { id, userId, title, description, ingredients, instructions, images, cuisine, prepTime, cookTime, servings }) => {
      const recipe = await Recipe.findByIdAndUpdate(id, { userId, title, description, ingredients, instructions, images, cuisine, prepTime, cookTime, servings }, { new: true });
      return recipe;
    },
  },
};

module.exports = recipeResolver;