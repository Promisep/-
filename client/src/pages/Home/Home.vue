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
                <el-menu-item >
                  <router-link v-show="!user.us" to="/login">登录</router-link>
                </el-menu-item>    
            </el-menu>
             <el-card class="box-card">
              <p>Hello {{user.us}}</p>
            </el-card>
            <!-- 轮播图 -->
             <el-carousel indicator-position="outside">
                <el-carousel-item  v-for="item in swiperList" >
                  <img :src="item.image_src">
                </el-carousel-item>
            </el-carousel>
            <!-- 每日必看 -->
            <div class="hot-sale-operation">
                <div class="hot-sale-title">
                    <img src="//a.vpimg2.com/upload/flow/2018/08/17/154/15344789862278.jpg">
                </div>
                <div class="hot-sale-content" v-for="item1 in floorList" >
                     <div class="title">
                       <img :src="item1.floor_title.image_src" >
                       <!-- <img data-lzsrc="data-lzsrc" class="ltart-clkable" src="//h2.appsimg.com/b.appsimg.com/upload/momin/2020/12/14/86/1607914975921_1200x684_90.jpg" > -->
                     </div>
                     <div class="content">
                       <navigator v-for="item2 in item1.product_list" >
                         <img :src="item2.image_src" >
                          <router-view></router-view>
                       </navigator>
                     </div>
                </div>
            </div>
        </div> 
    </div>
   
</template>
<script>
  export default {
   data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        swiperList:[],
         // 楼层
        floorList:[],
        path:'',
         user:{
          us:''
        },
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
         },
        ] 
      };
    },
    beforeCreate(){
        this.$axios.get('/user')
        .then(res => {
          console.log(res)
          console.dir(res.data)
          if (res.data.error) {
            this.$message.error(res.data.error);
            this.user.us = null;
            return false;
          }else{
            let user = localStorage.getItem('user');
            if (user) {
              this.user.us = user;
            }
          }
        })
        .catch(err => {
            this.$message.error(`${err.message}`)
        })
    },
    mounted(){
       this.getSwiperList();
       this.getFloorList();
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      getSwiperList(){
        const myUrl='https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'
        this.$axios.get(myUrl,{
           headers:{
             'Content-Type':'application/json'
           }
        }).then(res=>{
          this.swiperList=res.data.message;
          console.log(res.data.message)
        })
       },
       getFloorList(){
         this.$axios.get('https://api-hmugo-web.itheima.net/api/public/v1/home/floordata',{
            headers:{
             'Content-Type':'application/json'
           }
         }).then(res=>{
          this.floorList=res.data.message;
          console.log(res.data.message)
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
.hot-sale-content.content navigator {
  float: left;
  width: 33.33%;
}
.hot-sale-content .content navigator image {
  width: 100%;
}


</style>