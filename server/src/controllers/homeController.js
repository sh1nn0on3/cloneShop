import db from '../models/index'
import allServices from '../services/allServices'
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'
import user from '../models/user'
import product from '../models/product'
import { where } from 'sequelize'

let signUp = async (req,res) => {
    let message = await allServices.createUser(req.body)
    console.log(message)
    return res.send(message)
}


let signIn = async (req, res) => {
    let message = await allServices.logIn(req.body)
    console.log(message)
    if(message.errCode === 0){
        res.send("1")
    }else{
        return res.send("0")
    }
}

let getUser = async (req,res) => {
    try{
         let data  = await db.User.findOne({
            where: { email: req.body.email || null }
         })
         console.log(typeof data)
         return res.json(data)
    }catch(e){
     console.log(e);
    }
 
 }

let getAllData = async (req,res) => {
   try{
        let data  = await db.Product.findAll()
        console.log(typeof data)
        return res.json(data)
   }catch(e){
    console.log(e);
   }

}

let addProduct =async (req,res) => {
   let userId = req.body.userId
   let index = req.body.index
    await db.History.create({
    userId: userId,
    index: index
   })
   res.send("Add successfully")
}


let getHistoryById = async (req,res) => {
// <<<<<<< HEAD
//     let id = req.body
//     let data = await db.History.findAll({
//         where : { id: id || null }
//     })
//     console.log(data)
//     res.send("test")
// =======
   let userId = req.body.userId
   let data = await db.History.findAll({
    where : { userId : userId},
    raw: true
   })
   let history = []
   for(let index of data){
       history.push( await db.Product.findOne({
            where : { id : index.productId},
            raw: true
       }))
   }
   res.json(history)
// >>>>>>> ff0e7cf4061c98e1ecc2610aedad1a8c501f6d08
}

let getProductById = async (req,res) => {
    let data = await db.Product.findOne({
        where: { id: req.body.id || null }
    })
    res.json(data)
}

let logOut = (req,res) => {
    res.redirect('/sign-in')
}
module.exports = {
    signUp: signUp,
    signIn: signIn,
    getAllData: getAllData,
    getUser : getUser,
    getProductById: getProductById,
    getHistoryById: getHistoryById,
    addProduct: addProduct,
    logOut: logOut
}