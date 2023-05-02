import db from '../models/index'
import allServices from '../services/allServices'


let signUp = async (req,res) => {
    let message = await allServices.createUser(req.body)
    console.log(message)
    return res.send("New user created")
}

module.exports = {
    signUp: signUp,
}