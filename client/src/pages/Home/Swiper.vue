<template>
 <div @click="goodsDetail()">
    <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in swiperList" :key="id">
            <img :src="item.msgurl">
        </el-carousel-item>
    </el-carousel>
 </div>
</template>

<script>
export default {
    props:["id","swiperList"],
    data(){
        return{
            
        }
    },
    methods:{
        goodsDetail(){

            let routeData=this.$router.resolve({name:"goods",query:{id:this.id}})
            window.open(routeData.href,'_blank')
        }
    }
}
</script>
 