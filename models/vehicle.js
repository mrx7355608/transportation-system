const {
    Text,
    Relationship,
} = require("@keystonejs/fields/dist/fields.cjs.prod");

const vehicleModel = {
    fields: {
        model: {
            type: Text,
            isRequired: true,
        },
        driver: {
            type: Relationship,
            isRequired: true,
            ref: "Driver",
        },
    },
};

module.exports = { vehicleModel };
