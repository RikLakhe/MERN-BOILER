const { model, Schema } = require("mongoose");

const companiesSchema = new Schema({
    companyName:
    {
        type: String,
        require: [true, 'Company name is required'],
    },
    companyCountryCode:
    {
        type: String,
        require: [true, 'Company name is required'],
    },
    createDate:
    {
        type: Date,
    }
});

module.exports = model("companies", companiesSchema);

