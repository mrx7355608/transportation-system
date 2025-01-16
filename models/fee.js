const {
    Relationship,
    DateTime,
    Decimal,
    Select,
} = require("@keystonejs/fields");

const feeModel = {
    fields: {
        amount: {
            type: Decimal,
            isRequired: true,
        },
        dueDate: {
            type: DateTime,
            isRequired: true,
            format: "dd/MM/yyyy HH:mm O",
            yearRangeFrom: 2025,
            yearRangeTo: 2025,
            yearPickerType: "auto",
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
