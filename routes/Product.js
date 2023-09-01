const express=require("express")
const router=express.Router()
const Product=require("../models/Product")
const isAuth=require("../middleweare/isAuth")
const  isAdmin=require("../middleweare/isAdmin")

router.post('/add',async(req,res)=>{
    const {FoodName,Description,Price,image}=req.body
const newProduct=new Product({FoodName,Description,Price,image})
const product= await newProduct.save()
res.send({msg:"Product added",product})
})


router.delete('/:id',async(req,res)=>{
    const {id}=req.params
    const product=await Product.findOneAndDelete({_id:id})
    res.send({msg:"product deleted",product})
    })

    router.put('/edit/:id',isAuth,isAdmin,async(req,res)=>{
        const{id}=req.params
        const product=await Product.findOneAndUpdate({_id:id},{$set:req.body},{new:true})
        res.send({msg:'contact edited',product})
    })
    
    router.get("/products",async(req,res)=>{
        const product=await Product.find()
    
        res.send({msg:'product list',product})
    })






    module.exports=router