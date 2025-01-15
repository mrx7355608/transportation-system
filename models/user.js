const { Text, Select, Password } = require("@keystonejs/fields");
const { accessControls } = require("../utils/access-controls");

const userModel = {
    fields: {
        name: { type: Text },
        email: {
            type: Text,
            isUnique: true,
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
        },
    },
    // List-level access controls
    access: {
        read: accessControls.userIsAdminOrOwner,
        update: accessControls.userIsAdminOrOwner,
        create: accessControls.userIsAdmin,
        delete: accessControls.userIsAdmin,
        auth: true,
    },
};

module.exports = { userModel };
