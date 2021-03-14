const express=require('express')
const router=express.Router()
const homesual=require('../db/model/homesualModel')

router.get('/getSwiperList',(req,res)=>{
   homesual.find({},{_id:0},function(err,homesual){
       if(err){
           res.send({
               err:-1,
               msg:"错误"
           })
           console.log(err)
           
       }else{ 
            return res.send({err:0,msg:homesual})    
         
       }
   })
})
module.exports=router