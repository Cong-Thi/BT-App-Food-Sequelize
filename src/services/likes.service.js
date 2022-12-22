const Like = require("../models/Like");


const createLike = async (data) => {
    try {
        const { userId, resId } = data;

        const isLiked = await Like.findOne({
            where: {
                userId,
                resId
            }
        })

        if(isLiked){
            throw new Error("User đã like nhà hàng này")
        }
        const createLike = await Like.create(data);
        return createLike;
    } catch(error) {
        throw error;
    }
}

const deleteLike = async (userId, resId) => {
    try {
        //const  userId, resId  = data;

        const isUnLike = await Like.findOne({
            where: {
                userId,
                resId
            }
        })

        if(!isUnLike){
            throw new Error("Thông tin này chưa cập nhật")
        }
        console.log("hello",isUnLike);
        await Like.destroy(
            {where: 
                {  userId: userId,
                   resId : resId 
                }
         });
        return "Unlike";
    } catch(error) {
        throw error;
    }
}


const getLikesByUser = async (userID) => {
    try {
        const user = await Like.findOne({
            where: {
                userId: userID,
            }
        });

        if(!user){
            throw new Error("user not found")
        }

        const getLikesByUser = await Like.findAll({
            where: {userId: userID}
        })
        return getLikesByUser;
    } catch(error) {
        throw error;
    }
}

const getLikesByRes = async (resID) => {
    try {
        const res = await Like.findOne({
            where: {
                resId: resID,
            }
        });

        if(!res){
            throw new Error("restaurant not found")
        }

        const getLikesByRes = await Like.findAll({
            where: {resId: resID}
        })
        return getLikesByRes;
    } catch(error) {
        throw error;
    }
}

module.exports = {
    createLike,
    getLikesByUser,
    getLikesByRes,
    deleteLike,
};