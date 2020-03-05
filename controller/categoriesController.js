const Category = require('../model/categoriesModel');
const {errorHandler} = require('../utils/messageUtils');

// CRUD
// CREATE
const addCategory = (req, res, next) => {
    if (res.locals.decryptData) {
        const {categoryCode, categoryName, isCategoryActive} = res.locals.decryptData;
        if (!categoryCode || !categoryName) {
            res.locals.status = 400;
            res.locals.encryptData = {
                status: 'FAIL',
                data:{type:'warning', message: 'All fields are required'}
            };
            next();
        } else {
            let createDate = Date.now();

            const category = new Category({categoryCode, categoryName, isCategoryActive, createDate});

            category.save((error, response) => {
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
                        data: errorHandler(error)
                    };
                    next();
                }
            })
        }
    }
};

// READ LIST
const listCategory = (req, res, next) => {
    if (res.locals.decryptData) {
        const {pageNumber, pageSize} = res.locals.decryptData.pageData;
        if (pageNumber && pageSize && pageSize === 'ALL') {
            Category.find()
                .sort({createDate: -1})
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
            Category.find()
                .sort({createDate: -1})
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
        Category.find()
            .sort({createDate: -1})
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

const findCategoryById = (req, res, next) => {
    if (req.params.category_id.match(/^[0-9a-fA-F]{24}$/)) {
        Category
            .find({_id: req.params.category_id})
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
            data:{type:'error', message: "Category Code is invalid"}
        };
        next();
    }
};

// Update
const updateCategory = (req, res, next) => {
    if (res.locals.decryptData) {
        const {categoryCode, categoryName, isCategoryActive} = res.locals.decryptData;
        if (!categoryCode || !categoryName) {
            res.locals.status = 400;
            res.locals.encryptData = {
                status: 'FAIL',
                data:{type:'warning', message: "All fields are required"}
            };
            next();
        }

        Category
            .updateOne({_id: req.params.category_id},{
                _id: req.params.category_id,
                categoryCode: categoryCode,
                categoryName: categoryName,
                isCategoryActive: isCategoryActive,
            })
            .exec((error, response) => {
                if (!error) {
                    if (response && response.nModified > 0) {
                        res.locals.status = 200;
                        res.locals.encryptData = {
                            status: 'SUCCESS',
                            data: response
                        };
                        next()
                    } else {
                        res.locals.status = 400;
                        res.locals.encryptData = {
                            status: 'FAIL',
                            data: errorHandler("Code not found")
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
    }
}


// Delete
const deleteCategoryById = (req, res, next) => {
    if (req.params.category_id.match(/^[0-9a-fA-F]{24}$/)) {
        Category
            .deleteOne({_id: req.params.category_id})
            .exec((error, response) => {
                if (!error) {
                    res.locals.status = 200;
                    res.locals.encryptData = {
                        status: 'SUCCESS',
                        data: 'Category deleted successfully.',
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
            data:{type:'warning', message: "Category Code is invalid"}
        };
        next();
    }
};

module.exports = {addCategory, listCategory, findCategoryById, updateCategory, deleteCategoryById};
