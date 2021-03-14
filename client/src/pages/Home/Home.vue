<template>
    <div id="home">
        <div id="container">
            <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#fff"
                router
                default-active="path"
                text-color="black">
                <el-submenu index="1">
                    <template slot="title"  background-color="#f10180"  active-text-color="wilte">商品分类</template>
                    <div class="title" v-for="(item3,index) in nav_menu_data">
                      <el-menu-item :index="item3.path" :key="index"> {{item3.title}}</el-menu-item>
                    </div>
                </el-submenu>
                <el-submenu index="2" >
                        <template slot="title">我的工作台</template>
                        <div v-for="(item4, index) in nav_menu_data2">
                          <el-menu-item :index="item4.path" :key="index">{{item4.title}}</el-menu-item>
                        </div>
                </el-submenu>
                <el-menu-item index="3" >品牌清仓</el-menu-item>
                <el-menu-item index="4" >好物分享</el-menu-item>
                <el-menu-item index="5" >女装</el-menu-item>
                <el-menu-item index="6" >男装</el-menu-item>
                <el-menu-item index="7"><a href="https://www.ele.me" target="_blank">美妆</a></el-menu-item>
                <el-submenu index="8">
                   <template slot="title"  v-if="!showname"><router-link  to="/login">登录</router-link></template>
                   <template slot="title" v-else>{{user}}</template>
                  <div v-for="(item5, index) in nav_menu_data3">
                      <el-menu-item :index="item5.path" :key="index">{{item5.title}}</el-menu-item>
                  </div>
                  <el-popover
                    placement="top"
                    width="160"
                    v-model="visible">
                    <p>您确定要退出吗？</p>
                    <div style="text-align: right; margin: 0">
                      <el-button  size="mini" type="text" @click="visible = false">取消</el-button>
                      <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
                    </div>
                    <el-button slot="reference" @click="loginout()">退出登录</el-button>
                  </el-popover>

                </el-submenu>    
            </el-menu>
            <!-- 轮播图 -->    
            <Swiper :id="swiperList.goods_id" :swiperList="swiperList"></Swiper>
            <!-- 每日必看 -->
            <div class="hot-sale-operation" @click="goFloor()">
                <div class="hot-sale-title">
                    <img src="//a.vpimg2.com/upload/flow/2018/08/17/154/15344789862278.jpg">
                </div>
                <div class="hot-sale-content" v-for="item1 in floorList" >
                     <div class="title">
                       <img :src="item1.floor_title.image_src" >
                       <!-- <img data-lzsrc="data-lzsrc" class="ltart-clkable" src="//h2.appsimg.com/b.appsimg.com/upload/momin/2020/12/14/86/1607914975921_1200x684_90.jpg" > -->
                     </div>
                     <div class="content" >
                       <div class="main" v-for="item2 in item1.product_list" >
                         <img :src="item2.image_src" >
                          <router-view></router-view>
                       </div>
                     </div>
                </div>
            </div>
        </div> 
    </div>
   
</template>
<script>
import Swiper from './Swiper'
  export default {
    components:{Swiper},
   data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        swiperList:[{
          goods_id:'',
          msgurl:''
        }
        ],
         // 楼层
        floorList:[],
        path:'',
        showname:false,
        user:'',
        visible: false,
        nav_menu_data:[
          {
            title:'女装/男装/内衣',
            path:'./Navgate/page1'
          },
          {
            title:'女鞋/男鞋/箱包',
            path:'./Navgate/page1'
          },
            {
            title:'护肤彩妆',
            path:'./Navgate/page1'
          },
            {
            title:'家电数码',
            path:'./Navgate/page1'
          },
            {
            title:'母婴童装',
            path:'./Navgate/page1'
          }
        ],
       nav_menu_data2:[
         {
           title:'选项1',
           path:'./Navgate/page1'
         },
          {
           title:'选项1',
           path:'./Navgate/page1'
         },
          {
           title:'选项1',
           path:'./Navgate/page1'
         }
        ] ,
         nav_menu_data3:[
           {
            title:'个人中心',
            path:'./Navgate/page1'
           },
            {
            title:'个人中心',
            path:'./Navgate/page1'
           }  
         ]
           
         
      };
    },
    mounted(){
      let data=JSON.parse(localStorage.getItem('formData'))
      if(data!=null){
        this.user=data;
        console.log(this.user)
        this.showname=true
      }else{
        this.showname=false
      }
       this.getSwiperList();
       this.getFloorList();
    },
    methods: {
      loginout(){    
         localStorage.removeItem('formData'); 
         this.showname=false
        
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
     getSwiperList(){
        this.$axios.get('http://localhost:3000/homesual/getSwiperList',
        {headers:{'Content-Type':'application/json'}
        }).then(res=>{
          this.swiperList=res.data.msg;
          console.log(res.data.msg)
        })
       },
       goFloor(){
         this.$router.resolve({name:"goods",query:{id:this.id}})
       },
       getFloorList(){
         this.$axios.get('http://localhost:3000/floordata/getFloorList',{
            headers:{
             'Content-Type':'application/json'
           }
         }).then(res=>{
          this.floorList=res.data.msg;
          console.log(res.data.msg)
        })
       }
    }
  };
</script>
<style>
  .el-menu.el-menu--horizontal{
      width:max-content;
      height:43px;
      position: relative;
      margin:0 auto;

  }
  .el-carousel--horizontal{
      width:1200px;
      position: relative;
      margin: 0 auto;
  }
  .el-carousel__container{
      height:400px;
      
  }
   .el-carousel__item img {
    color: #475669;
    width:100%;
    opacity: 0.75;
    line-height: 400px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
 
  .hot-sale-title {
    width:1170px;
    height:70px;
    position: relative;
    margin: 0 auto;
    margin-bottom: 20px;
    
}
.hot-sale-title  img {  
     width:100%;
    vertical-align: top; 
}
.ltart-clkable{
  width: 600px; 
  height: 342px;
  position: relative;
  margin:0 auto;
  border-radius: 0px; 
  overflow: hidden; 
  object-fit: cover; 
}
.hot-sale-content .title image {
  width: 100%;
}
.hot-sale-content .content {
  overflow: hidden;
}
.main {
  float: left;
  width: 33.33%;
}
.hot-sale-content .content.main image {
  width: 100%;
}


</style>