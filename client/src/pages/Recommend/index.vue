<template>
   <el-container>
    <el-header>Header</el-header>
    <el-container>
        <el-aside width="200px">
            <Category></Category>
        </el-aside>
        <el-main>
            <Share></Share>
        </el-main>
    </el-container>
    <el-footer>Footer</el-footer>
  </el-container>
</template>
<script>
import Share from './Share'
import Category from './Category'
export default {
    components:{
        Share,
        Category
    },
    data(){
        return {
            screenWidth: document.body.clientWidth 
        }
    },
    mounted(){
        // 设置窗口自适应
        const that=this
        window.onresize=()=>{
            return(()=>{
                window.screenWidth=document.body.clientWidth
                that.screenWidth=window.screenWidth
            })
        }
    },
    watch:{
         screenWidth(val){
        // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
        if(!this.timer){
            // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
            this.screenWidth = val
            this.timer = true
            let that = this
            setTimeout(function(){
                // 打印screenWidth变化的值
                console.log(that.screenWidth)
                that.timer = false
            },400)
        }
    }
    }
}
</script>
<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #f0f4f8;
    color: #333;
    line-height: 200px;
    flex:1
  }
  
  .el-main {
    background-color: #f4f6f8;
    color: #333;
    text-align: center;
    line-height: 200px;
    float: right;
    flex:3

  }
  
  body > .el-container {
    margin-bottom: 40px;
    display: flex;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>