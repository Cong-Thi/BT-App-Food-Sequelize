// Routers V1

const express = require("express");
const userController = require("../../controllers/users.controllers");
const orderController = require("../../controllers/orders.controllers");
const rateController = require("../../controllers/rates.controllers");
const likeController = require("../../controllers/likes.controllers")

// path v1: /api/v1
const v1 = express.Router()


//Định nghĩa các routers cho user
v1.get("/users", userController.getUsers());

v1.post("/orders", orderController.createOrder());

v1.post("/rates", rateController.createRate());

v1.get("/rates/byuser/:userId", rateController.getRatesByUser());

v1.get("/rates/byres/:resId", rateController.getRatesByRes());

v1.post("/likes", likeController.createLike());

v1.delete("/unlike/:userId&:resId", likeController.deleteLike());

v1.get("/likes/byuser/:userId", likeController.getLikesByUser());

v1.get("/likes/byres/:resId", likeController.getLikesByRes());



module.exports = v1;