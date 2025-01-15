require("dotenv").config();
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const { keystone } = require("./keystone");
const { PasswordAuthStrategy } = require("@keystonejs/auth-password");
const { userModel } = require("./models/user");
const { config } = require("./utils/config");

// Create keystone models
keystone.createList("User", userModel);

const PROJECT_NAME = "Transportation System";

const authStrategy = keystone.createAuthStrategy({
    type: PasswordAuthStrategy,
    list: "User",
    config: { protectIdentities: config.nodeEnv === "production" },
});

module.exports = {
    keystone,
    apps: [
        new GraphQLApp(),
        new AdminUIApp({
            name: PROJECT_NAME,
            enableDefaultRoute: true,
            authStrategy,
        }),
    ],
};
