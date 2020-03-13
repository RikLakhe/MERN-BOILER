const jwt = require('jsonwebtoken');

const AppConfig = require('../config/appConfig');

const decodeToken = (Token) => {
    return jwt.decode(Token, AppConfig.jwtSecret);
};

const freshToken = (formData, timeDuration) => {
    return jwt.sign(
        formData,
        AppConfig.jwtSecret,
        {
            expiresIn: timeDuration,
        }
    );
};

const isTokenExpired = (token) => {
    try {
        const decoded = decodeToken(token, AppConfig.jwtSecret);
        return decoded.exp < Date.now() / 1000;
    } catch (e) {
        return false;
    }
};

module.exports = { freshToken, isTokenExpired, decodeToken };
