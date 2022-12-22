const Order = require("../models/Order");


 const createOrder = async (data) => {
    try {
        const createOrder = await Order.create(data);
        return createOrder;
    } catch(error) {
        throw error;
    }
}

module.exports = {
    createOrder,
};