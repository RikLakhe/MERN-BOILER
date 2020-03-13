const Users = require('../model/usersModel');
const { freshToken, isTokenExpired, decodeToken } = require('../utils/jwtUtils');
const { errorHandler } = require('../utils/messageUtils');
const { sendMail } = require('../utils/mailUtils')

// CRUD
const creatUser = (req, res, next) => {
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
            let isUserVerified = false;
            let createDate = Date.now();
            const users = new Users({ fullName, userName, email, password, sex, permission, isUserVerified, createDate });

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

// READ
const findUser = (req, res, next) => {
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
                                data: { type: 'error', message: 'User not found' }
                            };
                            next();
                        } else {
                            if (response[0].isUserVerified) {
                                res.locals.status = 200;
                                res.locals.newAccessToken = freshToken({
                                    name: userName,
                                    type: response[0].permission
                                }, '1 min');
                                res.locals.encryptData = {
                                    status: 'SUCCESS',
                                    token: res.locals.newAccessToken,
                                    permission: response[0].permission
                                };
                                next();
                            } else {
                                res.locals.status = 400;
                                res.locals.encryptData = {
                                    status: 'FAIL',
                                    data: { type: 'warning', message: 'User not verified' }
                                };
                                next();
                            }
                        }
                    } else {
                        res.locals.status = 400;
                        res.locals.encryptData = {
                            status: 'FAIL',
                            data: { type: 'warning', message: 'User not found' }
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

const findUserById = (req, res, next) => {
    if (req.params.user_id.match(/^[0-9a-fA-F]{24}$/)) {
        Users
            .find({ _id: req.params.user_id })
            .exec((error, response) => {
                if (!error) {
                    res.locals.status = 200;
                    res.locals.encryptData = {
                        status: 'SUCCESS',
                        data: response[0],
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
            data: { type: 'error', message: "User Code is invalid" }
        };
        next();
    }
};

const findPendingUserById = (req, res, next) => {
    if (req.params.user_id.match(/^[0-9a-fA-F]{24}$/)) {
        Users
            .find({
                _id: req.params.user_id,
                isUserVerified: false
            })
            .exec((error, response) => {
                if (!error) {
                    res.locals.status = 200;
                    res.locals.encryptData = {
                        status: 'SUCCESS',
                        data: response[0],
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
            data: { type: 'error', message: "User Code is invalid" }
        };
        next();
    }
};

const listUsers = (req, res, next) => {
    if (res.locals.decryptData) {
        const { pageNumber, pageSize } = res.locals.decryptData.pageData;
        if (pageNumber && pageSize && pageSize === 'ALL') {
            Users.find({ isUserVerified: true })
                .sort({ createDate: -1 })
                .exec((error, response) => {
                    if (!error) {
                        if (response.length === 0) {

                            res.locals.status = 200;
                            res.locals.encryptData = {
                                status: 'SUCCESS',
                                data: {}
                            };
                            next();
                        } else {
                            res.locals.status = 200;
                            res.locals.encryptData = {
                                status: 'SUCCESS',
                                data: response,
                                pagination: {
                                    pageNumber: pageNumber,
                                    pageSize: pageSize,
                                    totalRecords: response.length,
                                    pageSizeOption: [5, 10, 15, 'ALL']
                                }
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
                });
        } else {
            Users.find({ isUserVerified: true })
                .sort({ createDate: -1 })
                .exec((error, response) => {
                    if (!error) {
                        if (response.length === 0) {
                            res.locals.status = 200;
                            res.locals.encryptData = {
                                status: 'SUCCESS',
                                data: {}
                            };
                            next();
                        } else {
                            res.locals.status = 200;
                            res.locals.encryptData = {
                                status: 'SUCCESS',
                                data: response.slice((pageNumber - 1) * pageSize || 0, pageSize * pageNumber || 5),
                                pagination: {
                                    pageNumber: pageNumber,
                                    pageSize: pageSize,
                                    totalRecords: response.length,
                                    pageSizeOption: [5, 10, 15, 'ALL']
                                }
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
                });
        }
    } else {
        Users.find({ isUserVerified: true })
            .sort({ createDate: -1 })
            .exec((error, response) => {
                if (!error) {
                    if (response.length === 0) {
                        res.locals.status = 200;
                        res.locals.encryptData = {
                            status: 'SUCCESS',
                            data: {}
                        };
                        next();
                    } else {
                        res.locals.status = 200;
                        res.locals.encryptData = {
                            status: 'SUCCESS',
                            data: response.slice(0, 5),
                            pagination: {
                                pageNumber: 1,
                                pageSize: 5,
                                totalRecords: response.length,
                                pageSizeOption: [5, 10, 15, 'ALL']
                            }
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
            });
    }
};

const findPendingUsers = (req, res, next) => {
    if (res.locals.decryptData) {
        const { pageNumber, pageSize } = res.locals.decryptData.pageData;
        if (pageNumber && pageSize && pageSize === 'ALL') {
            Users.find({ isUserVerified: false })
                .sort({ createDate: -1 })
                .exec((error, response) => {
                    if (!error) {
                        if (response.length === 0) {
                            res.locals.status = 200;
                            res.locals.encryptData = {
                                status: 'SUCCESS',
                                data: {}
                            };
                            next();
                        } else {
                            res.locals.status = 200;
                            res.locals.encryptData = {
                                status: 'SUCCESS',
                                data: response,
                                pagination: {
                                    pageNumber: pageNumber,
                                    pageSize: pageSize,
                                    totalRecords: response.length,
                                    pageSizeOption: [5, 10, 15, 'ALL']
                                }
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
                });
        } else {
            Users.find({ isUserVerified: false })
                .sort({ createDate: -1 })
                .exec((error, response) => {
                    if (!error) {
                        if (response.length === 0) {
                            res.locals.status = 200;
                            res.locals.encryptData = {
                                status: 'SUCCESS',
                                data: {}
                            };
                            next();
                        } else {
                            res.locals.status = 200;
                            res.locals.encryptData = {
                                status: 'SUCCESS',
                                data: response.slice((pageNumber - 1) * pageSize || 0, pageSize * pageNumber || 5),
                                pagination: {
                                    pageNumber: pageNumber,
                                    pageSize: pageSize,
                                    totalRecords: response.length,
                                    pageSizeOption: [5, 10, 15, 'ALL']
                                }
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
                });
        }
    } else {
        Users.find({ isUserVerified: false })
            .sort({ createDate: -1 })
            .exec((error, response) => {
                if (!error) {
                    if (response.length === 0) {
                        res.locals.status = 200;
                        res.locals.encryptData = {
                            status: 'SUCCESS',
                            data: {}
                        };
                        next();
                    } else {
                        res.locals.status = 200;
                        res.locals.encryptData = {
                            status: 'SUCCESS',
                            data: response.slice(0, 5),
                            pagination: {
                                pageNumber: 1,
                                pageSize: 5,
                                totalRecords: response.length,
                                pageSizeOption: [5, 10, 15, 'ALL']
                            }
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
            });
    }
}

// Update
const verifyUser = (req, res, next) => {
    // TODO

    if (req.query.TOKEN && !isTokenExpired(req.query.TOKEN)) {
        let userData = decodeToken(req.query.TOKEN)
        Users
            .find({
                userName: userData.user.userName,
                email: userData.user.email,
            })
            .exec((error, response) => {
                if (!error) {
                    console.log('tatatat', response[0])
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

        //     Users
        //         .updateOne({ _id: req.params.category_id }, {
        //             _id: req.params.category_id,
        //             isUserVerified: true
        //         })
        //         .exec((error, response) => {
        //             if (!error) {
        //                 res.locals.status = 200;
        //                 res.locals.encryptData = {
        //                     status: 'SUCCESS',
        //                     data: response[0],
        //                 };
        //                 next();
        //             } else {
        res.locals.status = 400;
        res.locals.encryptData = {
            status: 'FAIL',
            data: errorHandler(error)
        };
        next();
        //             }
        //         })
    } else {
        res.locals.status = 400;
        res.locals.encryptData = {
            status: 'FAIL',
            data: { type: 'error', message: "Token Expired" }
        };
        next();
    }
}

module.exports = { creatUser, findUser, listUsers, findUserById, findPendingUserById, findPendingUsers, verifyUser };