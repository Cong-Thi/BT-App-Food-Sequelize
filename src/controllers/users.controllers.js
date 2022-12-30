const { response } = require("../helpers/response")
const userSevice = require("../services/users.service")

const getUsers = () => {
    return async (req, res, next) => {
        try{
            const users = await userSevice.getUsers();
            console.log(users);
            res.status(200).json(response(users))
        } catch(error){
            next(error)
        }        
    };
};

module.exports = {
    getUsers,
    
}