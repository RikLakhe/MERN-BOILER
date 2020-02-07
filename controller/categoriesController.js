const Category = require('../model/categoriesModel');

// CRUD
// CREATE
const addCategory = (req, res, next) => {
    if (req.body) {
        const {categoryCode, categoryName, categoryActive} = req.body;
        if (!categoryCode || !categoryName) {
            return res.status(400).json({
                status: 'FAIL',
                message: 'All fields are required!'
            });
        }

        const category = new Category({categoryCode, categoryName, categoryActive});

        category.save((err,data)=>{
            if (err) {
                return res.status(400).json(errorHandler(err));
            } else {
                return res.status(200).send({data: successHandler(data)});
            }
        })
    } else {
        return res.status(400).json({
            status: 'FAIL',
            message: 'Error in Request'
        });
    }
};

