const mongoose=require('mongoose')
var ualSchema = new mongoose.Schema({
   
    msgurl: {type:String,required:true},
    goods_id:Number,
  });

// 将scheme对象转化为数据类型
  module.exports=mongoose.model('homesual',ualSchema)