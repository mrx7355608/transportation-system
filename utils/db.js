const { MongooseAdapter } = require("@keystonejs/adapter-mongoose");

const mongooseAdapter = new MongooseAdapter({
  mongoUri: process.env.DB_URL,
});

module.exports = { mongooseAdapter };
