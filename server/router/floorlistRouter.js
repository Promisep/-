const express=require('express')
const router=express.Router()
const floordata=require('../db/model/floorlistModel')

router.get('/getFloorList',(req,res)=>{
    floordata.find({},{_id:0},(err,floordata)=>{
        if(err){
            res.send({
                err:-1,
                msg:"错误"
            })
            console.log(err)
            
        }else{ 
            console.log(floordata)
             return res.send({err:0,msg:floordata})    
          
        }
    })
})
module.exports=router
