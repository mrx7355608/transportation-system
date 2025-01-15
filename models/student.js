const { Text, Integer } = require("@keystonejs/fields");
const { userModel } = require("./user");

const studentModel = {
    fields: {
        ...userModel.fields,
        fatherName: { type: Text, isRequired: true },
        address: { type: Text },
        campus: { type: Text, isRequired: true },
        cnic: { type: Text, isRequired: true },
        phoneNumber: { type: Integer, isRequired: true },
    },

    access: userModel.access,
};

module.exports = { studentModel };
