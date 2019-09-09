const routes = require("../routes");
const express = require("express");
const homeController = require("../controllers/homeController");

const globalRouter = express.Router(); //express 라우터
globalRouter.get(routes.home, homeController.home); //get방식 라우터 설정
globalRouter.post(routes.home, homeController.savePostHome); //upload.multer,
globalRouter.get(routes.coordi, homeController.coordi);

globalRouter.get(routes.test, homeController.test);

globalRouter.post("/saveImage", homeController.saveImage);
globalRouter.post(routes.uploadTag, homeController.uploadTag);
globalRouter.get("/example", homeController.example);
globalRouter.get(routes.closet, homeController.closet);

module.exports = globalRouter;