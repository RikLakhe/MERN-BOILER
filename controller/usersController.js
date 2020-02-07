const Users = require('../model/usersModel');

// CRUD
const creatUser = () => {
}

// READ
const findUser = async (userName, password) => {
    try {
        const temp = await Users.find({
            userName,
            password
        });

        return temp
    } catch {
        console.log('errorrrrrr 1234')
    }
};

module.exports = {creatUser, findUser};