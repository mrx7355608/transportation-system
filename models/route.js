const { LocationGoogle } = require("@keystonejs/fields-location-google");
const { config } = require("../utils/config");

const routeModel = {
    fields: {
        source: {
            type: LocationGoogle,
            isRequired: true,
            googleMapsKey: config.googleMapsKey,
        },
        destination: {
            type: LocationGoogle,
            isRequired: true,
            googleMapsKey: config.googleMapsKey,
        },
    },
};

module.exports = { routeModel };
