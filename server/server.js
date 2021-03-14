const express=require('express')
const app=express()
const db=require('./db/connect')
const cookieParser=require('cookie-parser')
const cors=require('cors')
const session = require('express-session')

app.use(cors());
app.use(cookieParser());

const bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:false})) //解析表单
app.use(bodyparser.json()) 

// 引入路由
const userRouter =require('./router/userRouter')

const homesualRouter=require('./router/homesualRouter')
const floorlistRouter=require('./router/floorlistRouter')
// 作为中间件引用
app.use('/user',userRouter) 
app.use('/homesual',homesualRouter)
app.use('/floordata',floorlistRouter) 
app.listen(3000,()=>{
  console.log('server start')  
})