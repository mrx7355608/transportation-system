const { CloudinaryAdapter } = require("@keystonejs/file-adapters");
const { config } = require("./config");

const cloudinaryAdapter = new CloudinaryAdapter({
    cloudName: config.cloudinaryCloudName,
    apiKey: config.cloudinaryKey,
    apiSecret: config.cloudinarySecret,
    folder: "transportation-system",
});

module.exports = { cloudinaryAdapter };
