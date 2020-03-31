const { model, Schema } = require("mongoose");
const { encrypt, encryptpass } = require('../utils/cryptoUtil')

const usersSchema = new Schema({
    fullName:
    {
        type: String,
        require: [true, 'Name is required'],
    },
    userName:
    {
        type: String,
        require: [true, 'Username is required'],
        unique: [true, 'Username must be unique']
    },
    email:
    {
        type: String,
        require: [true, 'Email is required'],
    },
    hashed_password:
    {
        type: String,
        require: [true, 'Password is required'],
    },
    sex:
    {
        type: String,
        require: [true, 'Sex is required'],
    },
    permission:
    {
        type: String,
        require: [true, 'Permission is required'],
    },
    isUserVerified:
    {
        type: Boolean,
        default: false
    },
    useTwoWayAuthentication: {
        type: Boolean,
        default: false
    },
    createDate:
    {
        type: Date,
    }
});

// Virtual fields 
// !important
// This is one of expections when we cannot use arrow function, failed countless time due to this issue.
usersSchema
    .virtual('password')
    .set(function (password) {
        this._password = password
        this.hashed_password = encryptpass(password);
    })
    .get(function () {
        return this._password
    })

usersSchema.methods = {
    authenticate: function (plainText) {
        return encryptpass(plainText) === this.hashed_password;
    }
}

module.exports = model("Users", usersSchema);

