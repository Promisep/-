const express=require('express')
const router=express.Router()
const User=require('../db/model/userModel')
const createToken =require('../middlewares/createToken')
router.post('/reg',(req,res)=>{
    // 获取数据
    let {us,ps}=req.body
    // if(!us || !ps) return res.send({err:-1,msg:'参数错误'})
    if(us&&ps){ 
        User.find({us})
        .then((data)=>{
            if(data.length===0){
                // 用户名不存在，注册
               User.insertMany({us:us,ps:ps})
               res.send({err:0,msg:'注册成功',us:us})
            }else{
                return res.send({err:-3,msg:'用户名已存在'})
            }
        })
        .catch((err)=>{
            res.send({err:-2,msg:'注册出错'})
        })
    }else{
        return res.send({err:-1,msg:'参数错误'})
    }
    // 数据处理

    // 返回数据
})

router.post('/login',(req,res)=>{
  let us=req.body.us
  let ps=req.body.ps
  let token=createToken(this.us) 
  console.log(us)
    if(us&&ps){
        User.find({us})
        .then((data)=>{
            console.log(data)
            if(data==null){
                res.send({err:-2,msg:'用户名或密码不正确'})
            }else{
                
                 res.send({err:0,msg:'登录成功',us:us,token: createToken(us)})
            }
        })
        .catch((err)=>{
            res.send({err:-1,msg:'内部错误'})
        })
    }else{
        return res.send({err:-1,msg:'用户名或密码缺少'})
      
    }
    // {us:us,ps:ps}==={us,ps}
   
})
module.exports=router