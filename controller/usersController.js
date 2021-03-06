const Users = require('../model/usersModel');
const { freshToken, isTokenExpired, decodeToken } = require('../utils/jwtUtils');
const { errorHandler } = require('../utils/messageUtils');
const { sendMail } = require('../utils/mailUtils')

// CRUD


// READ


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


module.exports = { listUsers, findUserById, findPendingUserById, findPendingUsers };