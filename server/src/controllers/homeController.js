import db from '../models/index'
import allServices from '../services/allServices'
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'

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

let getAllData = async (req,res) => {
   try{
        let data  = await db.Product.findAll()
        console.log(typeof data)
        return res.json(data)
   }catch(e){
    console.log(e);
   }

}

let getProductById = async (req,res) => {
    let data = await db.Product.findOne({
        where: { id: req.body.id || null }
    })
    res.json(data)
}
module.exports = {
    signUp: signUp,
    signIn: signIn,
    getAllData: getAllData,
    getProductById: getProductById
}