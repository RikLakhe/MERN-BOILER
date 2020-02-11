const Category = require('../model/categoriesModel');

// CRUD
// CREATE
const addCategory = (req, res, next) => {
    if (res.locals.decryptData) {
        const {categoryCode, categoryName, isCategoryActive} = res.locals.decryptData;
        if (!categoryCode || !categoryName) {
            res.locals.status = 400;
            res.locals.encryptData = {
                status: 'ERROR',
                message: 'All fields are required'
            };
            next();
        } else {
            const category = new Category({categoryCode, categoryName, isCategoryActive});

            category.save((err, data) => {
                if (err) {
                    res.locals.status = 400;
                    res.locals.encryptData = {
                        status: 'FAIL',
                        message: err
                    };
                    next()
                } else {
                    res.locals.status = 200;
                    res.locals.encryptData = {
                        status: 'SUCCESS',
                    };
                    next()
                }
            })
        }
    } else {
        next();
    }
};

module.exports = {addCategory};
