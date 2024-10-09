const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const { buildSchema } = require('graphql');
const { ApolloServer } = require('apollo-server-express');
const userSchema = require('./schemas/userSchema');
const userResolver = require('./resolvers/userResolver');
const recipeSchema = require('./schemas/RecipeSchema');
const recipeResolver = require('./resolvers/recipeResolver');



// Initialize ApolloServer with schema and resolvers
const server = new ApolloServer({
  typeDefs: [userSchema, recipeSchema],
  resolvers: [userResolver, recipeResolver],
  introspection: true,
  playground: true,
});


const app = express();

mongoose.connect('mongodb+srv://aaronsal208:zNSEYPwgdsWNOahL@cluster0.kgznh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { 
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB!'))
.catch(err => console.error('Failed to connect to MongoDB', err));

// const schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);

// const root = {
//   hello: () => {
//     return 'Hello world!';
//   },
// };

// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: root,
//   graphiql: true,
// }));

app.listen(4000, async () => { // Make the callback function async
  await server.start(); // Await server.start() before applying middleware
  server.applyMiddleware({ app }); // Now it's safe to call applyMiddleware
  console.log('Running a GraphQL API server at http://localhost:4000/graphql');
});