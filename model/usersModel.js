const {model, Schema} = require("mongoose");

const usersSchema = new Schema({
    userName:
        {
            type: String,
            require: [true, 'Username is required'],
            unique: [true, 'Username must be unique']
        },
    password:
        {
            type: String,
            require: [true, 'Password is required'],
        },
    permission:
        {
            type: String,
            require: [true, 'Permission is required'],
        }
});

const Users = model("Users", usersSchema);

module.exports = Users;

