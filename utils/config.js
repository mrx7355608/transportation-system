const config = {
    port: process.env.PORT,
    dbUrl: process.env.DB_URL,
    nodeEnv: process.env.NODE_ENV,
    cookieSecret: process.env.COOKIE_SECRET,
    cloudinaryKey: process.env.CLOUDINARY_KEY,
    cloudinarySecret: process.env.CLOUDINARY_SECRET,
    cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
    defaultImage: process.env.DEFAULT_IMAGE,
};

module.exports = { config };
