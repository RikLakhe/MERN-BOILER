module.exports = {
    name: "Rikesh Lal Shrestha",
    cookieSecret: process.env.COOKIE_SECRET,
    cookieOptions: {
        maxAge: 60 * 5000,
        // httpOnly: true,s
        signed: true,
    },
    cookieOptionsLogin: {
        maxAge: 60 * 1000,
        // httpOnly: true,
        signed: true,
    },
    jwtSecret: process.env.JWT_SECRET,
    projectKey: process.env.ENCODE_SECRET,
    mongoDB: {
        url: process.env.MONGODB_URL,
        database: process.env.MONGODB_DB
    }
};