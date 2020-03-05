const {model, Schema} = require("mongoose");

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
    password:
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
        },
    createDate:
        {
            type: Date,
        }
});

module.exports = model("Users", usersSchema);

