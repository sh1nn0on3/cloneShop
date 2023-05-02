import bodyParser from "body-parser";
import db from "../models/index"
 
let createUser = (data) => {
    return new Promise(async (resolve,reject) => {
        try{
            await db.User.create({
                name: data.name,
                email: data.email,
                phone: data.phone,
                password: data.password
            })
            resolve("New user created")
        }catch(e){
            reject(e);
            
        }
        
    })
}

module.exports = {
    createUser: createUser,
}