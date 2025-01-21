const { Relationship, Select } = require("@keystonejs/fields");
const {
    AuthedRelationship,
} = require("@keystonejs/fields-authed-relationship");

const scheduleModel = {
    fields: {
        day: {
            type: Select,
            options: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
            ],
            isRequired: true,
        },

        classes: {
            type: Relationship,
            ref: "Class",
            isRequired: true,
            many: true,
        },

        student: {
            type: Relationship,
            ref: "Student",
            isRequired: true,
        },
    },
    adminConfig: {
        defaultColumns: "classes,student",
    },
    labelField: "day",
};

module.exports = { scheduleModel };
