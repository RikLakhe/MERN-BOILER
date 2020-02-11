const Users = require('../model/usersModel');
const jwtUtils = require('../utils/jwtUtils');

// CRUD
const creatUser = () => {
}

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
        } else {
            Users.find({
                userName,
                password
            }).exec((error, response) => {
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
                        res.locals.accessToken = jwtUtils.freshToken({name: userName, type: 'ADMIN'}, '1 min');
                        res.locals.encryptData = {
                            status: 'SUCCESS',
                            token: res.locals.accessToken,
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