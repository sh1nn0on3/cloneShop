import data from "../data/data.json"
import bodyParser from "body-parser"
import db from "../src/models/index"



let upLoad = async () => {
   for (let index of data.body){
    try{
        await db.Product.create({
            name: index.name,
            image: index.image,
            price: index.price,
            cpu:index.cpu,
            ssd: index.ssd,
            card: index.card,
            screen: index.screen
        })
    }catch(e){
        console.log(e)
    }
   }
   
}

module.exports = upLoad