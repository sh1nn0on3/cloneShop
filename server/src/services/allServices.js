import bodyParser from "body-parser";
import db from "../models/index"
// import jwt from 'jsonwebtoken'
// import cookieParser from 'cookie-parser'
// import document from 'jsdom'
 require('dotenv').config()


 

  
 
let createUser = (data) => {
    return new Promise(async (resolve,reject) => {
        try{
            let isExist = await db.User.findOne({
                where: { email : data.email}
            })
            if(!isExist){
                await db.User.create({
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    password: data.password
                })
                resolve("New user created")
            }else{
                resolve("Email already used")
            }
        }catch(e){
            reject(e);
            
        }
        
    })
}


let logIn = async (data) => {
    let userEmail = data.email
    let userPassword = data.password
    let key = process.env.SECRET_KEY
    return new Promise(async (resolve, reject) => {
        try{
            if(!userEmail||!userPassword){
                resolve({
                    errCode : 1,
                    message: "Lack of data"
                })
            }
            else {
                let user = await db.User.findOne({
                    where : { email : userEmail }
                })
                if(!user){
                    resolve({
                        errCode : 2,
                        message: "Wrong email"
                    })
                }else{
                    if(userPassword === user.password){
                        resolve({
                            errCode: 0,
                            message: "Log in success",
                        })
                    }else{
                        resolve({
                            errCode: 3,
                            message: "Wrong password"
                        })
                    }
                }
            }

        } catch(e){
            reject(e)
        }
    })
}


let addToHistory =async (data) => {
   try{
    await db.History.create({
        userId : userID,
        productId : productId
    })
   }catch(e){
    console.log(e)
   }
}

module.exports = {
    createUser: createUser,
    logIn: logIn,
    addToHistory: addToHistory
    
}