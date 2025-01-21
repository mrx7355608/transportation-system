require("dotenv").config();
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const { keystone } = require("./keystone");
const { PasswordAuthStrategy } = require("@keystonejs/auth-password");
const { config } = require("./utils/config");

// Models
const { userModel } = require("./models/user");
const { studentModel } = require("./models/student");
const { driverModel } = require("./models/driver");
const { feeModel } = require("./models/fee");
const { routeModel } = require("./models/route");
const { vehicleModel } = require("./models/vehicle");
const { classesModel } = require("./models/classes");
const { scheduleModel } = require("./models/schedule");

// Create keystone models
keystone.createList("User", userModel);
keystone.createList("Driver", driverModel);
keystone.createList("Student", studentModel);
keystone.createList("Fee", feeModel);
keystone.createList("Route", routeModel);
keystone.createList("Vehicle", vehicleModel);
keystone.createList("Class", classesModel);
keystone.createList("Schedule", scheduleModel);

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
