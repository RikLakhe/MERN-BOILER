const Users = require('../model/usersModel');
const {freshToken} = require('../utils/jwtUtils');
const {errorHandler} = require('../utils/messageUtils');

// CRUD
const creatUser = (req, res, next) => {
    if (res.locals.decryptData) {
        const {userName, password, permission} = res.locals.decryptData;
        if (!userName || !password || !permission) {
            res.locals.status = 400;
            res.locals.encryptData = {
                status: 'ERROR',
                message: 'All fields are required'
            };
            next();
        } else {
            let isUserVerified = false;
            const users = new Users({userName, password, permission, isUserVerified});

            users.save((error, response) => {
                if (!error) {
                    res.locals.status = 200;
                    res.locals.encryptData = {
                        status: 'SUCCESS',
                        data: response
                    };
                    next();
                } else {
                    res.locals.status = 400;
                    res.locals.encryptData = {
                        status: 'FAIL',
                        message: errorHandler(error)
                    };
                    next();
                }
            })
        }
    }
};

// READ
const findUser = (req, res, next) => {
    if (res.locals.decryptData) {
        const {userName, password} = res.locals.decryptData;
        if (!userName || !password) {
            res.locals.status = 400;
            res.locals.encryptData = {
                status: 'FAIL',
                message: 'All field are required'
            };
            next();
        } else {
            Users
                .find({
                userName,
                password
            })
                .exec((error, response) => {
                if (!error) {
                    if (response.length === 0) {
                        res.locals.status = 400;
                        res.locals.encryptData = {
                            status: 'FAIL',
                            message: 'User not found'
                        };
                        next();
                    } else {
                        res.locals.status = 200;
                        res.locals.newAccessToken = freshToken({name: userName, type: 'ADMIN'}, '1 min');
                        res.locals.encryptData = {
                            status: 'SUCCESS',
                            token: res.locals.newAccessToken,
                            permission: response[0].permission
                        };
                        next();
                    }
                } else {
                    res.locals.status = 400;
                    res.locals.encryptData = {
                        status: 'FAIL',
                        message: 'User not found'
                    };
                    next();
                }
            });
        }
    } else {
        res.locals.status = 400;
        res.locals.encryptData = {
            status: 'FAIL',
            message: 'Login Fail'
        };
        next();
    }
};

module.exports = {creatUser, findUser};