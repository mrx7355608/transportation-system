const { Text } = require("@keystonejs/fields");

const routeModel = {
    fields: {
        source: {
            type: Text,
            isRequired: true,
        },
        destination: {
            type: Text,
            isRequired: true,
        },
    },
};

module.exports = { routeModel };
