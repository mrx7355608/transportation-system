const { DateTime, Text } = require("@keystonejs/fields");

const classesModel = {
    fields: {
        timings: {
            type: DateTime,
            format: "HH:mm",
            isRequired: true,
            yearPickerType: "auto",
        },
        subject: {
            type: Text,
            isRequired: true,
        },
    },
    adminConfig: {
        defaultColumns: "timing",
    },
    labelField: "subject", // Use the `subject` field as the display label
};

module.exports = { classesModel };
