const { DateTime, Text } = require("@keystonejs/fields");

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
        timings: {
            type: DateTime,
            format: "dd/MM/yyyy HH:mm O",
            yearRangeFrom: 2025,
            yearRangeTo: 2025,
            yearPickerType: "auto",
            isRequired: true,
        },
    },
};

module.exports = { routeModel };
