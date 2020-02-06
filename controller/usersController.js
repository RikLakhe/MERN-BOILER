const Users = require('../model/usersModel');

// CRUD
const creatUser = () => {
}

// READ
const findUser = (userName, password) => {
    return Users.find({
        userName,
        password
    })
};

module.exports = {creatUser, findUser};