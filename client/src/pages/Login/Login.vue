<template>
    <div class="login-container">
      <div class="login-inner">  
        <div class="login-header">
          <div class="login-logo">
            <img src="./images/login.png" alt="" width="150">
          </div>
          <div class="login-content">
            <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
              <div class="login-message">
                  <input type="text" @click="user" v-model="formLabelAlign.email"  placeholder="账号">
              </div>
              <div class="login-password">
                  <input type="passwod"  @click="password" v-model="formLabelAlign.password"  placeholder="密码">
              </div>
             
              <button class="login-submit" @click="login">登录</button>  
             <router-view/>
            </el-form>
          </div>
        </div>
      </div>
    </div>
    <!--App -->
</template>

<script>
    import axios from 'axios'
    export default {
    
      data(){
        return{
          labelPosition: 'right',
          formLabelAlign: {
          email: '',
          password: '',
          },
          dynamicValidateForm: {
          domains: [{
            value: ''
          }],
         }
        }
      },
      
        methods: {
            user() {
                axios.post("/user").then(res => {
                    if (res.data) {
                        this.formLabelAlign.email=res.data.email;
                        localStorage.setItem('this.formLabelAlign.email',JSON.stringify(res.data.email));
    
                    }
                })
            },
            password() {
                axios.post("/password").then(response => {
                    if (response.data) {
                        this.formLabelAlign.password=response.data.password;
                         localStorage.setItem('this.formLabelAlign.password',JSON.stringify(response.data.password));
                    }
                })
            },
           login(){
             if(!this.formLabelAlign.email){
               alert('邮箱不能为空')
            //  }else if(!this.formLabelAlign.password){
            //    alert('密码不能为空')
             }else{
                this.$router.push('/Home')
             }
           }
        },
      mounted(){
        var data1 =  JSON.parse(localStorage.getItem('this.formLabelAlign.email'));
        var data2 =  JSON.parse(localStorage.getItem('this.formLabelAlign.password'));
        if(data1&&data2!=null){
          this.formLabelAlign.email= data1;
          this.formLabelAlign.password=data2;
          console.log(data1)
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
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: 0;
  font: 400 14px Arial;
  line-height: 48px;
}
.login-message{
  margin-bottom: 16px;
}
.login-submit{
  margin-top: 16px;
  width: 100%;
  height: 42px;
  border-radius: 4px;
  background: mediumpurple;
  color:#fff;
  text-align: center;
  font-size: 16px;
  border: 0;
  line-height: 42px;

}
</style>