const mongoose=require('mongoose')
var floorSchema = new mongoose.Schema({
    floor_title:{type:Object,required:true},
    name:{type:String,required:true},
    image_src: {type:String,required:true},
    product_list:[Object],
    image_width:Number,
    open_type:String,
    navigator_url:{type:String,required:true}
  });

// 将scheme对象转化为数据类型
  module.exports=mongoose.model('floordata',floorSchema)