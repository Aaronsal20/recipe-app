const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  userId: String,
  title: String,
  description: String,
  ingredients: String,
  instructions: String,
  images: [String],
  cuisine: String,
  prepTime: String,
  cookTime: String,
  servings : String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Recipe', recipeSchema);