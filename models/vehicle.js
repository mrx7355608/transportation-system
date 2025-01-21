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
    },
    labelField: "model",
};

module.exports = { vehicleModel };
