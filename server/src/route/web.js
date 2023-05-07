import express from "express"
import homeController from "../controllers/homeController";
let router = express.Router();
let initWebRoutes = (app) => {
    router.get('/',(req,res) => {
        res.send("Hello world")
    });

   router.post('/sign-up',homeController.signUp);

   router.get("/sign-in",(req,res) => {
    res.send("SIgn in")
   })

   router.post("/sign-in",homeController.signIn);

   router.get('/get-data',homeController.getAllData);

   router.get('/get-product-data',homeController.getProductById)

   router.post('/add-history',homeController.addProduct)

   router.post('/get-history',homeController.getHistoryById)

   router.get('/logout',homeController.logOut)

    return app.use('/',router);
}
module.exports = initWebRoutes;