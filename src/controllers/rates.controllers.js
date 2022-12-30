const { response } = require("../helpers/response");
const rateService = require("../services/rates.service")

const createRate = () => {
    return async (req, res, next) => {
        try{
            const data = req.body;
            const createdRate = await rateService.createRate(data);
            res.status(200).json(response(createdRate));
        } catch(error){
            next(error)
        }
    };
};

const getRatesByUser = () => {
    return async (req, res, next) => {
        try{
            const {userId} = req.params;
            console.log(userId);
            const getRatesByUsers = await rateService.getRatesByUser(userId);
            res.status(200).json(response(getRatesByUsers));
        } catch(error){
            next(error)
        }
    };
};

const getRatesByRes = () => {
    return async (req, res, next) => {
        try{
            const {resId} = req.params;
            const getRatesByRestaurant = await rateService.getRatesByRes(resId);
            res.status(200).json(response(getRatesByRestaurant));
        } catch(error){
            next(error)
        }
    };
};

module.exports = {
    createRate,
    getRatesByUser,
    getRatesByRes,
}