const { AppError } = require("../helpers/error");
const {Like, User, Restaurant} = require("../models");


const createLike = async (data) => {
    try {
        const {userId, resId} = data

        const user = await User.findByPk(userId)
        if(!user){
            throw new AppError(400,"User Not Found")
        }

        const restaurant = await Restaurant.findByPk(resId)
        if(!restaurant){
            throw new AppError(400,"Restaurant Not Found")
        }

        console.log(restaurant.__proto__);
       
        const hasLiked = await restaurant.hasUserLike(user.userId);
 
        if (hasLiked) {
         await restaurant.removeUserLike(user.userId);
        } else {
         await restaurant.addUserLike(user.userId);
        }
 
        return null;
        
    } catch(error) {
        throw error;
    }
}

const getLikesByUser = async (userID) => {
    try {
        const user = await Like.findOne({
            where: {
                userId: userID,
            }
        });

        if(!user){
            throw new AppError(400, "user not found")
        }

        const getLikesByUser = await Like.findAll({
            where: {userId: userID}
        })
        return getLikesByUser;
    } catch(error) {
        throw error;
    }
}

const getLikesByRes = async (resID) => {
    try {
        const res = await Like.findOne({
            where: {
                resId: resID,
            }
        });

        if(!res){
            throw new AppError(400, "restaurant not found")
        }

        const getLikesByRes = await Like.findAll({
            where: {resId: resID}
        })
        return getLikesByRes;
    } catch(error) {
        throw error;
    }
}

module.exports = {
    createLike,
    getLikesByUser,
    getLikesByRes,
    deleteLike,
};