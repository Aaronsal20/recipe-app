const User = require('../models/User');
const bcrypt = require('bcrypt');

const userResolver = {
  Query: {
    users: async () => {
      return await User.find({});
    },
  },
  Mutation: {
    createUser: async (_, { email, password, name, bio }) => {
      // Generate a salt and hash the password
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      // Use the hashed password to create the user
      const user = new User({ email, password: hashedPassword, name, bio });
      await user.save();
      return user;
    },
  },
};

module.exports = userResolver;