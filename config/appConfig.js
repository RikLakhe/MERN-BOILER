module.exports = {
    name: "Rikesh Lal Shrestha",
    cookieSecret: 'secret',
    cookieOptions: {
        maxAge: 60 * 5000,
        // httpOnly: true,
        signed: true,
    },
    cookieOptionsLogin: {
        maxAge: 60 * 1000,
        // httpOnly: true,
        signed: true,
    },
    jwtSecret: 'secretjwt',
};