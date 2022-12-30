const { response } = require("../helpers/response");
const likeService = require("../services/likes.service")

const createLike = () => {
    return async (req, res, next) => {
        try{
            const data = req.body;
            await likeService.createLike(data);
            res.status(200).json(response("OK"));
        } catch(error){
            next(error)
        }
    };
};


const getLikesByUser = () => {
    return async (req, res, next) => {
        try{
            const {userId} = req.params;
            const getLikesByUsers = await likeService.getLikesByUser(userId);
            res.status(200).json(response(getLikesByUsers));
        } catch(error){
            next(error)
        }
    };
};

const getLikesByRes = () => {
    return async (req, res, next) => {
        try{
            const {resId} = req.params;
            const getLikesByRestaurant = await likeSevice.getLikesByRes(resId);
            res.status(200).json(response(getLikesByRestaurant));
        } catch(error){
            next(error)
        }
    };
};

module.exports = {
    createLike,
    getLikesByUser,
    getLikesByRes,
   
}