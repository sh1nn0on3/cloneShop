import express from "express"
import homeController from "../controllers/homeController";
let router = express.Router();
let initWebRoutes = (app) => {
    router.get('/',(req,res) => {
        res.send("Hello world")
    });

   router.post('/sign-up',homeController.signUp);

   router.post("/sign-in",homeController.signIn)

    return app.use('/',router);
}
module.exports = initWebRoutes;