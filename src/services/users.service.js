const {User} = require("../models");

const getUsers = async () => {
    try{
        const users = await User.findAll();
        return users;
    } catch(error){
        throw error;
    }
}

module.exports = {
    getUsers
};