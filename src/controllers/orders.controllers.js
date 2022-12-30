const { response } = require("../helpers/response");
const orderService = require("../services/orders.service")

const createOrder = () => {
    return async (req, res, next) => {
        try{
            const data = req.body;
            const order = await orderService.createOrder(data);
            res.status(200).json(response(order));
        } catch(error){
            next(error)
        }
    };
};

module.exports = {
    createOrder,
}