import db from '../models/index'
import allServices from '../services/allServices'


let signUp = async (req,res) => {
    let message = await allServices.createUser(req.body)
    console.log(message)
    return res.send(message)
}


let signIn = async (req, res) => {
    let message = await allServices.logIn(req.body)
    console.log(message)
    if(message.errCode === 0){
        res.send("Log in succeed")
    }else{
        return res.send("Log in failed")
    }
}

let getProductInformationById = (req,res) => {

}
module.exports = {
    signUp: signUp,
    signIn: signIn,
    getProductInformationById: getProductInformationById,
}