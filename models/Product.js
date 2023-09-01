const mongoose=require("mongoose")
const schema=mongoose.Schema

const ProductSchema=new schema({
    FoodName:{
        type:String
    },
    Description:{
        type:String
    },
    Price:{
        type:String
    },
    image:{
        type:String
    },
   

})

module.exports=Product=mongoose.model("Product",ProductSchema)