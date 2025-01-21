const { Text, Relationship } = require("@keystonejs/fields");
const { userModel } = require("./user");
const { CloudinaryImage } = require("@keystonejs/fields-cloudinary-image");
const { cloudinaryAdapter } = require("../utils/cloudinary-adapter");

const driverModel = {
    fields: {
        vehicle: {
            type: Relationship,
            ref: "Vehicle",
            defaultValue: null,
        },
        license: {
            type: CloudinaryImage,
            adapter: cloudinaryAdapter,
            defaultValue: null,
        },
        cnic: { type: Text },
        phoneNumber: { type: Text },
        address: { type: Text },
    },

    labelField: "user.name",

    access: userModel.access,
};

module.exports = { driverModel };
