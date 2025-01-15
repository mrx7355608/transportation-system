const { Keystone } = require("@keystonejs/keystone");
const { mongooseAdapter } = require("./utils/db");
const { config } = require("./utils/config");

const keystone = new Keystone({
    adapter: mongooseAdapter,
    cookieSecret: config.cookieSecret,
});

module.exports = { keystone };
