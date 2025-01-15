const { userModel } = require("./user");

const driverModel = {
    fields: {
        ...userModel.fields,
    },

    access: userModel.access,
};

module.exports = { driverModel };
