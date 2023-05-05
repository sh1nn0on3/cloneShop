import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB";
import cors from "cors";
import upData from "../data/upData"
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'

require("dotenv").config();
let app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())
viewEngine(app);
initWebRoutes(app);
connectDB();
// upData()
let port = process.env.PORT || 6969;



app.listen(port, () => {
  console.log("Backend Nodejs is running on the port : " + port);
});
