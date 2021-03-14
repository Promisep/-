<template>
    <div class="login-container">
      <div class="login-inner">  
        <div class="login-header">
          <div class="login-logo">
            <img src="./images/login.jpg" alt="" width="150">
          </div>
          <div class="login-content">
            <el-form :label-position="labelPosition" label-width="80px" v-model="loginForm">
              <div class="login-message">
                  <input type="text" v-model="loginForm.us"  placeholder="账号">
              </div>
              <div class="login-password">
                  <input type="passwod"   v-model="loginForm.ps"  placeholder="密码">
              </div>
              
                <button class="login-submit" @click="login">登录</button>  
                <button class="login-submit" @click="reg">注册</button> 
            
            </el-form>
          </div>
        </div>
      </div>
    </div>
    <!--App -->
    
</template>

<script>
import { mapMutations } from 'vuex';
    export default {
      data(){
        return{
          labelPosition: 'right',
          loginForm:{
            us:'',
            ps:'',
          },
          
          dynamicValidateForm: {
          domains: [{
            value: ''
          }],
         }
        }
      },
      
        methods: {
            // user() {
            //     axios.post("/user").then(res => {
            //         if (res.data) {
            //             this.formLabelAlign.email=res.data.email;
            //             localStorage.setItem('this.formLabelAlign.email',JSON.stringify(res.data.email));
    
            //         }
            //     })
            // },
            // password() {
            //     axios.post("/password").then(response => {
            //         if (response.data) {
            //             this.formLabelAlign.password=response.data.password;
            //              localStorage.setItem('this.formLabelAlign.password',JSON.stringify(response.data.password));
            //         }
            //     })
            // },
          ...mapMutations(['setToken']), 
           login(){
             let user=this.loginForm;
             let formData={
               us:user.us,
               ps:user.ps
             }
             if(user.us===''|| user.ps===''){
               this.$alert('账号或密码不能为空')
             }else{
                const myUrl="http://localhost:3000/user/login"
                this.$axios({
                  method:'post',
                  url:myUrl,
                  data:formData
                }).then(res=>{
                  if(res.data.err==-2||res.data.err==-1){
                   this.$alert(res.data.msg)
                }else{
                    //  this.$router.push({path:'/',query:{formData}})
                     this.$router.push('/');
                     localStorage.setItem('formData',JSON.stringify(res.data.us));
                     console.log(res.data)
                     return false;
                  }
                })
             } 
           },
          reg(){
             let user=this.loginForm;
             let formData={
               us:user.us,
               ps:user.ps
             }
              if(user.us===''||user.ps===''){
                this.$alert('账号或密码不能为空')
              }else{
                const Myurl="http://localhost:3000/user/reg"
                this.$axios({
                  method:'post',
                  url:Myurl,
                  data:formData
                }).then(res=>{
                  if(res.data.err==-1||res.data.err==-2||res.data.err==-3){
                     this.$alert(res.data.msg)
                  }else{
                    ths.$alert(res.data.msg)
                  }
                })
              }
          }

        }
    }
</script>

<style >

.login-container {
  width: 100%;
  height: 100%;
  background: #fff;
}
.login-container .login-inner {
  padding-top: 60px;
  width: 25%;
  margin: 0 auto;
}
.login-container .login-inner .login-header .login-logo {
  font-size: 20px;
  font-weight: bold;
  color: mediumpurple;
  text-align: center;
  
  margin-bottom: 20px;
}
.login-container .login-content {
  text-align: center;
 
}
.login-container .login-content input {
  width: 97%;
  height: 45px;
  box-sizing: border-box;
  border: 1px solid #6caaa8;
  border-radius: 50px;
  outline: 0;
  font: 400 14px Arial;
  line-height: 48px;
}
.login-message{
  margin-bottom: 16px;
}
.login-submit{
  margin-top: 16px;
  width: 48%;
  height: 42px;
  border-radius: 50px;
  background: #6caaa8;
  color:#fff;
  text-align: center;
  font-size: 16px;
  border:2px solid #6caaa8;
  line-height: 42px;

}
</style>