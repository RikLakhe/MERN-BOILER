const {model, Schema} = require("mongoose");

const categorySchema = new Schema({
    categoryCode:
        {
            type: String,
            require: [true, 'Category Code is required'],
            unique: [true, 'Category Code must be unique']
        },
    categoryName:
        {
            type: String,
            require: [true, 'Category Name is required'],
            unique: [true, 'Category Code must be unique']
        },
    categoryActive:
        {
            type: Boolean,
            require: [true, 'Category Status is required'],
        },
});

const Categories = model("Categories", categorySchema);

module.exports = Categories;

