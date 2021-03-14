<template>
  <div>商品详情页</div>
</template>
<script>
export default {
    name:"goods",
    data(){
        return{
            id:""
        }
    
    },
    created(){
        this.id = this.$route.query.id
        console.log(this.id)
        this.getGoodsInfo();
    }
}
</script>
