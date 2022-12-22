const likeSevice = require("../services/likes.service")

const createLike = () => {
    return async (req, res) => {
        try{
            const like = req.body;
            const createdLike = await likeSevice.createLike(like);
            res.status(200).json({data: createdLike});
        } catch(error){
            res.status(500).json({error:error.message});
        }
    };
};

const deleteLike = () => {
    return async (req, res) => {
        try{
            const { userId, resId  } = req.params;
             await likeSevice.deleteLike(userId,resId);
            res.status(200).json({data: true});
        } catch(error){
            res.status(500).json({error:error.message});
        }
    };
};

const getLikesByUser = () => {
    return async (req, res) => {
        try{
            const {userId} = req.params;
            const getLikesByUsers = await likeSevice.getLikesByUser(userId);
            res.status(200).json({data: getLikesByUsers});
        } catch(error){
            res.status(500).json({error:error.message});
        }
    };
};

const getLikesByRes = () => {
    return async (req, res) => {
        try{
            const {resId} = req.params;
            const getLikesByRestaurant = await likeSevice.getLikesByRes(resId);
            res.status(200).json({data: getLikesByRestaurant});
        } catch(error){
            res.status(500).json({error:error.message});
        }
    };
};

module.exports = {
    createLike,
    getLikesByUser,
    getLikesByRes,
    deleteLike,
}