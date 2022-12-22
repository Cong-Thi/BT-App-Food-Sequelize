const userSevice = require("../services/users.service")

const getUsers = () => {
    return async (req, res) => {
        try{
            const users = await userSevice.getUsers();
            res.status(200).json({data: users})
        } catch(error){
            res.status(500).json({error:error.message})
        }        
    };
};

module.exports = {
    getUsers,
    
}