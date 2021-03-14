// 创建一个和集合相关的scheme对象
//通过mongoose获取Schema对象
const mongoose=require('mongoose')
var userSchema = new mongoose.Schema({
    us: {type:String,required:true},
    ps: {type:String,required:true},
    token:String
    // age: Number,
    // sex:{type:Number,default: 0 }
  });

// 将scheme对象转化为数据类型
  var User = mongoose.model('user', userSchema); 
  module.exports=User