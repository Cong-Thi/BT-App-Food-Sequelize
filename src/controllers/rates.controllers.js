const rateSevice = require("../services/rates.service")

const createRate = () => {
    return async (req, res) => {
        try{
            const rate = req.body;
            const createdRate = await rateSevice.createRate(rate);
            res.status(200).json({data: createdRate});
        } catch(error){
            res.status(500).json({error:error.message});
        }
    };
};

const getRatesByUser = () => {
    return async (req, res) => {
        try{
            const {userId} = req.params;
            const getRatesByUsers = await rateSevice.getRatesByUser(userId);
            res.status(200).json({data: getRatesByUsers});
        } catch(error){
            res.status(500).json({error:error.message});
        }
    };
};

const getRatesByRes = () => {
    return async (req, res) => {
        try{
            const {resId} = req.params;
            const getRatesByRestaurant = await rateSevice.getRatesByRes(resId);
            res.status(200).json({data: getRatesByRestaurant});
        } catch(error){
            res.status(500).json({error:error.message});
        }
    };
};

module.exports = {
    createRate,
    getRatesByUser,
    getRatesByRes,
}