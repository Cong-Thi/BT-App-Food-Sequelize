const { AppError } = require("../helpers/error");
const {Rate, User, Restaurant} = require("../models");


const createRate = async (data) => {
    try {
        const {userId, resId} = data;

        const user = await User.findByPk(userId)
        if(!user){
            throw new AppError(400,"User Not Found")
        }

        const restaurant = await Restaurant.findByPk(resId)
        if(!restaurant){
            throw new AppError(400,"Restaurant Not Found")
        }
        
        console.log(restaurant.__proto__);
        const hasRated = await restaurant.hasUserRate(user.userId)
        
        if(hasRated){
            throw new AppError(403,"User has rated this restaurant")
        }
        const rate = await Rate.create(data);
        return rate;
    } catch(error) {
        throw error;
    }
}

const getRatesByUser = async (userID) => {
    try {
        const user = await Rate.findOne({
            where: {
                userId: userID,
            }
        });

        if(!user){
            throw new AppError(400, "user not found")
        }

        const getRatesByUser = await Rate.findAll({
            where: {userId: userID}
        })
        return getRatesByUser;
    } catch(error) {
        throw error;
    }
}

const getRatesByRes = async (resID) => {
    try {
        const res = await Rate.findOne({
            where: {
                resId: resID,
            }
        });

        if(!res){
            throw new AppError(400, "restaurant not found")
        }

        const getRatesByRes = await Rate.findAll({
            where: {resId: resID}
        })
        return getRatesByRes;
    } catch(error) {
        throw error;
    }
}

module.exports = {
    createRate,
    getRatesByUser,
    getRatesByRes,
};