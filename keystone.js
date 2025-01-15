const { Keystone } = require("@keystonejs/keystone");
const { mongooseAdapter } = require("./utils/db");

const keystone = new Keystone({
  adapter: mongooseAdapter,
  cookieSecret: process.env.COOKIE_SECRET,
});

module.exports = { keystone };
