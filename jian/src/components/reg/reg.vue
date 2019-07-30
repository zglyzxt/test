<template>
  <div class="login">
      <h1>简居客家居</h1>
      <!-- 阻止表单原来的事件 -->
      <form id="login-form" @submit.native.prevent="login">
          <div class="cells_form">
              <!-- 手机号 -->
              <div class="weui-cell">
                  <div class="weui-cell_hd">
                      <label for="weui-label">手机号</label>
                  </div>
                  <div class="weui-cell_bd">
                      <input type="number" v-model="phone" name="reg-phone" class="weui-input" placeholder="请输入手机号" id="reg-phone">
                  </div>
              </div>
               <!-- 验证码 -->
              <div class="weui-cell">
                  <div class="weui-cell_hd">
                      <label for="weui-label ">验证码</label>
                  </div>
                  <div class="weui-cell_bd">
                      <input type="number" v-model="code" class="weui-input" name="reg-code" placeholder="验证码" id="login-code">
                  </div>
                  <div class="weui-cell_ft">
                      <button type="button" class="weui-code-btn" id="send-btn" data-type="reg-phone">获取验证码</button>
                  </div>
              </div>
              <!-- 昵称 -->
              <div class="weui-cell">
                  <div class="weui-cell_hd">
                      <label for="weui-label">昵  称</label>
                  </div>
                  <div class="weui-cell_bd">
                      <input type="text" v-model="username" name="reg-name" class="weui-input" placeholder="怎么称呼您" id="reg-name">
                  </div>
              </div>
              <!-- 密码 -->
              <div class="weui-cell">
                  <div class="weui-cell_hd">
                      <label for="weui-label">密  码</label>
                  </div>
                  <div class="weui-cell_bd">
                      <input type="text" v-model.trim="pwd" minlength="6" class="weui-input" placeholder="不短于6位" id="reg-pwd">
                  </div>
              </div>     
          </div>
          <div class="btn-holder">
              <div class="from-group">
                  <button class="btn btn-default" type="button" @click="reg">完成注册</button>
              </div>
              <div class="from-group">
                  <button class="btn btn-submit" type="button" @click="toLogin">登 录</button>
              </div>
          </div>
      </form>
  </div>
</template>

<script>
import {Toast } from 'mint-ui'
import axios from "axios"
export default {
  name: 'reg',
  data () {
    return {
     msg:"reg",
     phone:"",
     pwd:"",
     code:"",
     username:"",
     value:false,
     model:{}
    }
  },
  methods:{
       toLogin(){
        this.$router.push('/login')
      },
      reg(){   
          let _this = this;
         const {name, pwd, code ,username} = this
          if(!this.phone) {
            alert('请输入用户名')
            return
          }  else if(!this.code) {
            alert('请输入验证码')
            return
          } else if(!this.username) {
            alert('请输入昵称')
            return
          } else if(!this.pwd) {
            alert('请输入密码')
            return
          }else{
              let reg = /^1(3|4|5|6|7|8|9)\d{9}$/;
              if(!reg.test(this.phone)){
                  let instance = Toast('请输入正确手机号')
                    setTimeout(() => {
                        instance.close()
                    }, 1000)
                    return
              }
          }
          this.axios.post('/addPostObj',{phone:this.phone,pwd:this.pwd,username:this.username}).then(res=>{
              console.log('reg',res.data.msg)
          if(res.data.success===1){
                    Toast({
                        message:"注册成功"
                    });
                    setInterval(() => {
                        this.$router.push('/login')
                    }, 3000);
                    
                }else if(res.data.err===2){
                    Toast({
                        message:res.data.msg
                    })
                }
            }).catch(err=>{
                console.log('err',err)
           })
      }

  }
}
</script>


<style scoped>
.switch{
    display: flex;
    justify-content: space-between;
}
.login{
    width:100%;
    height: 100%;
    background: white;
    position: fixed;
    top:0;
    left: 0;
}
h1{
    margin: 30px auto 0;
    display: block;
    width: 120px;
    height: 60px;
    color: #cf000e;
    text-align: center;
}
.btn{
    text-align: center;
    width: 90%;
    display: block;
    height: 36px;
    line-height: 34px;
    border-radius: 5px;
    font-size: 14px;
    margin:10px auto;
}
.btn-group{
     padding: 0 10px 0 10px;
}
.btn-default {
    background: #cf000e;
    color: #fff;
    border: 1px solid #cf000e;
    text-decoration: none;
}
.btn-submit{
    background: #fff;
    color: #cf000e;
    border: 1px solid #ccc;
    text-decoration: none;
}
.weui-cell{
    padding: 10px 15px;
    position: relative;
    display: flex;
    align-items: center;
    margin-top:10px;
}
.weui-cell:before{
    border-top: 1px solid #e5e5e5;
}
.weui-label{
    display: block;
    width: 70px;
}
.weui-input {
    background-color: transparent;
    font-size: inherit;
    height: 18px;
    border: 0;
    width: 100%;
    color: inherit;
    outline: 0;
    padding: 0 5px;
}
.weui-code-btn{
    outline: 0;
    border:0;
    border-left: 1px solid #e5e5e5;
    background-color: transparent;
    display: inline-block;
    padding: 0 9px 0 12px;
    font-size: 16px;
}
.weui-code-btn{
    color:red;
}
</style>
