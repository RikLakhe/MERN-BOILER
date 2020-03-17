const Users = require('../model/usersModel');
const { freshToken, isTokenExpired, decodeToken } = require('../utils/jwtUtils');
const { errorHandler } = require('../utils/messageUtils');
const { sendMail } = require('../utils/mailUtils')

const signUp = (req, res, next) => {
    if (res.locals.decryptData) {
        const { fullName, userName, email, password, sex, permission } = res.locals.decryptData;
        if (!fullName || !userName || !email || !password || !sex || !permission) {
            res.locals.status = 400;
            res.locals.encryptData = {
                status: 'FAIL',
                data: { type: 'warning', message: 'All fields are required' }
            };
            next();
        } else {
            let createDate = Date.now();
            const users = new Users({ fullName, userName, email, password, sex, permission, createDate });

            users.save((error, response) => {
                if (!error) {

                    sendMail({ email, userName }, 'New account', 'verify')
                    res.locals.status = 200;
                    res.locals.encryptData = {
                        status: 'SUCCESS',
                        data: { email, userName }
                    };
                    next();
                } else {
                    res.locals.status = 400;
                    res.locals.encryptData = {
                        status: 'FAIL',
                        data: errorHandler(error)
                    };
                    next();
                }
            })
        }
    }
};

const login = (req, res, next) => {
    if (res.locals.decryptData) {
        const { userName, password } = res.locals.decryptData;
        if (!userName || !password) {
            res.locals.status = 400;
            res.locals.encryptData = {
                status: 'FAIL',
                data: { type: 'warning', message: 'All field are required' }
            };
            next();
        } else {
            Users
                .findOne({
                    userName
                })
                .exec((error, response) => {
                    if (error || !response) {
                        res.locals.status = 400;
                        res.locals.encryptData = {
                            status: 'FAIL',
                            data: { type: 'warning', message: 'User not found, Sign up !' }
                        };
                        next();
                    } else if (!response.authenticate(password)) {
                        res.locals.status = 400;
                        res.locals.encryptData = {
                            status: 'FAIL',
                            data: { type: 'warning', message: 'User and password doesnot match.' }
                        };
                        next();
                    } else if (!response.isUserVerified) {
                        res.locals.status = 400;
                        res.locals.encryptData = {
                            status: 'FAIL',
                            data: { type: 'warning', message: 'User not verified' }
                        };
                        next();
                    } else {
                        res.locals.status = 200;
                        res.locals.newAccessToken = freshToken({
                            name: userName,
                            type: response.permission
                        }, '1 min');
                        res.locals.encryptData = {
                            status: 'SUCCESS',
                            token: res.locals.newAccessToken,
                            permission: response.permission
                        };
                        next();
                    }
                });
        }
    } else {
        res.locals.status = 400;
        res.locals.encryptData = {
            status: 'FAIL',
            data: { type: 'error', message: 'Login Fail' }
        };
        next();
    }
};

const verifyUser = (req, res, next) => {
    // TODO

    if (req.query.TOKEN && !isTokenExpired(req.query.TOKEN)) {
        let userData = decodeToken(req.query.TOKEN)
        Users
            .updateOne({
                userName: userData.user.userName,
                email: userData.user.email,
            }, {
                isUserVerified: true
            })
            .exec((error, response) => {
                if (!error) {
                    if (response && response.nModified > 0) {
                        res.locals.status = 200;
                        res.locals.encryptData = {
                            status: 'SUCCESS',
                            data: { message: "User successfully verified." },
                        };
                        next();
                    } else {
                        res.locals.status = 400;
                        res.locals.encryptData = {
                            status: 'FAIL',
                            data: errorHandler("User not found.")
                        };
                        next();
                    }

                } else {
                    res.locals.status = 400;
                    res.locals.encryptData = {
                        status: 'FAIL',
                        data: errorHandler(error)
                    };
                    next();
                }
            })
    } else {
        res.locals.status = 400;
        res.locals.encryptData = {
            status: 'FAIL',
            data: { type: 'error', message: "Token Expired" }
        };
        next();
    }
}

// utils
const resendMailUser = (req, res, next) => {
    if (req.query.TOKEN && isTokenExpired(req.query.TOKEN)) {
        let userData = decodeToken(req.query.TOKEN)
        console.log('ggggg', userData)
        Users
            .find({
                userName: userData.user.userName,
                email: userData.user.email,
            })
            .exec((error, response) => {
                if (!error) {
                    sendMail({
                        userName: userData.user.userName,
                        email: userData.user.email,
                    }, 'New account', 'verify')
                    res.locals.status = 200;
                    res.locals.encryptData = {
                        status: 'SUCCESS',
                        data: "Mail send for verification",
                    };
                    next();
                } else {
                    res.locals.status = 400;
                    res.locals.encryptData = {
                        status: 'FAIL',
                        data: errorHandler(error)
                    };
                    next();
                }
            })
    } else {
        res.locals.status = 400;
        res.locals.encryptData = {
            status: 'FAIL',
            data: { type: 'error', message: "Token Expired" }
        };
        next();
    }
}

module.exports = { login, verifyUser, resendMailUser, signUp }