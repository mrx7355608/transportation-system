const { MongooseAdapter } = require("@keystonejs/adapter-mongoose");
const { config } = require("./config");

const mongooseAdapter = new MongooseAdapter({
    mongoUri: config.dbUrl,
});

module.exports = { mongooseAdapter };
