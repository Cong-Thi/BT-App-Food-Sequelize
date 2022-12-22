const orderSevice = require("../services/orders.service")

const createOrder = () => {
    return async (req, res) => {
        try{
            const order = req.body;
            const createdOrder = await orderSevice.createOrder(order);
            res.status(200).json({data: createdOrder});
        } catch(error){
            res.status(500).json({error:error.message});
        }
    };
};

module.exports = {
    createOrder,
}