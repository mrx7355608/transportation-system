const { Text } = require("@keystonejs/fields");
const { userModel } = require("./user");

const studentModel = {
    fields: {
        fatherName: { type: Text, isRequired: true },
        address: { type: Text },
        campus: { type: Text, isRequired: true },
        cnic: { type: Text, isRequired: true },
        phoneNumber: { type: Text, isRequired: true, isUnique: true },
    },

    access: userModel.access,
};

module.exports = { studentModel };
