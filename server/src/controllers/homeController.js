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
        res.send("1")
    }else{
        return res.send("0")
    }
}
module.exports = {
    signUp: signUp,
    signIn: signIn,
}