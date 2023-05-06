import express from "express"
import homeController from "../controllers/homeController";
let router = express.Router();
let initWebRoutes = (app) => {
    router.get('/',(req,res) => {
        res.send("Hello world")
    });

   router.post('/sign-up',homeController.signUp);

   router.post("/sign-in",homeController.signIn);

   router.get('/get-data',homeController.getAllData);

   router.post('/get-product-data',homeController.getProductById)

   router.post('/add-history',homeController.addProduct)

   router.get('/get-history',homeController.getHistoryById)

    return app.use('/',router);
}
module.exports = initWebRoutes;