const { Relationship, Text, Select, Password } = require("@keystonejs/fields");
const { accessControls } = require("../utils/access-controls");
const { CloudinaryImage } = require("@keystonejs/fields-cloudinary-image");
const { cloudinaryAdapter } = require("../utils/cloudinary-adapter");
const { config } = require("../utils/config");

const userModel = {
    fields: {
        name: { type: Text },
        email: {
            type: Text,
            isUnique: true,
            isRequired: true,
        },
        image: {
            type: Text,
            defaultValue: config.defaultImage,
        },
        role: {
            type: Select,
            options: [
                { value: "admin", label: "Admin" },
                { value: "driver", label: "Driver" },
                { value: "student", label: "Student" },
            ],
            isRequired: true,
            access: {
                update: accessControls.userIsAdmin,
            },
        },
        password: {
            type: Password,
            isRequired: true,
        },
        student: {
            type: Relationship,
            ref: "Student",
            defaultValue: null,
        },
        driver: {
            type: Relationship,
            ref: "Driver",
            defaultValue: null,
        },
    },

    // List-level access controls
    access: {
        read: true,
        update: accessControls.userIsAdminOrOwner,
        create: true,
        delete: accessControls.userIsAdminOrOwner,
        auth: true,
    },
    adminConfig: {
        defaultColumns: "name,email,role",
    },
};

module.exports = { userModel };
