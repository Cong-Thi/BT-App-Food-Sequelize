const { AppError } = require("../helpers/error");
const { Order, User, Food } = require("../models");

const createOrder = async (data) => {
    try {
        const { userId, foodId } = data
        
        const user = await User.findByPk(userId)
        if (!user) {
            throw new AppError(404,"User Not Found")
        }

        const food = await Food.findByPk(foodId)
        if (!food) {
            throw new AppError(404,"food Not Found")
        }
        const order = await Order.create(data);
        return order;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createOrder,
};