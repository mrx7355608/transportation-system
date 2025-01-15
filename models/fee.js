const { Decimal, Select } = require("@keystonejs/fields");
const { Relationship } = require("@keystonejs/fields/dist/fields.cjs.prod");

const feeModel = {
    fields: {
        amount: {
            type: Decimal,
            isRequired: true,
        },
        dueDate: {
            type: Date,
            isRequired: true,
        },
        studentID: {
            type: Relationship,
            ref: "Student",
        },
        isPaid: {
            type: Select,
            options: [
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
            ],
        },
    },
};

module.exports = { feeModel };
