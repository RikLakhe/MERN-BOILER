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
    projectKey:'APPLEPIE',
    mongoDB: {
        url: 'mongodb+srv://lakheMern:9849225111@lakhemern-8mon9.mongodb.net/test?retryWrites=true&w=majority',
        database : 'boilerplate'
    }
};