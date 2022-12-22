const Rate = require("../models/Rate");


const createRate = async (data) => {
    try {
        const createRate = await Rate.create(data);
        return createRate;
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
            throw new Error("user not found")
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
            throw new Error("restaurant not found")
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