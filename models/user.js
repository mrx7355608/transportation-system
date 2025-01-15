const { Text, Select, Password } = require("@keystonejs/fields");
const { accessControls } = require("../utils/access-controls");
const { CloudinaryImage } = require("@keystonejs/fields-cloudinary-image");
const { cloudinaryAdapter } = require("../utils/cloudinary-adapter");

const userModel = {
    fields: {
        name: { type: Text },
        image: { type: CloudinaryImage, adapter: cloudinaryAdapter },
        email: {
            type: Text,
            isUnique: true,
            isRequired: true,
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
    },
    // List-level access controls
    access: {
        read: accessControls.userIsAdminOrOwner,
        update: accessControls.userIsAdminOrOwner,
        create: accessControls.userIsAdmin,
        delete: accessControls.userIsAdminOrOwner,
        auth: true,
    },
};

module.exports = { userModel };
