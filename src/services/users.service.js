const User = require("../models/User");

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