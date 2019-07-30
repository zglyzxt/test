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
            <input
              type="number"
              v-model="phone"
              name="login-phone"
              class="weui-input"
              placeholder="请输入手机号"
              id="login-phone"
            />
          </div>
        </div>
        <!-- 账号密码 -->
        <div class="weui-cell" v-if="isShow">
          <div class="weui-cell_hd">
            <label for="weui-label">密&nbsp;&nbsp;&nbsp;码</label>
          </div>
          <div class="weui-cell_bd">
            <input
              type="password"
              v-model="pwd"
              name="login-pwd"
              class="weui-input"
              placeholder="请输入密码"
              id="login-pwd"
            />
          </div>
        </div>
        <!-- 验证码 -->
        <div class="weui-cell" v-if="!isShow">
          <div class="weui-cell_hd">
            <label for="weui-label" >验证码</label>
          </div>
          <div class="weui-cell_bd">
            <input
              type="number"
              v-model="codeI"
              class="weui-input"
              name="login-code"
              placeholder="验证码"
              id="login-code"
            />
          </div>
          <div class="weui-cell_ft">
            <!-- <input for="weui-label" type="number" v-model="verifyCode" placeholder="验证码" /> -->
            <!-- <button type="button" class="weui-code-btn" id="send-btn" data-type="login-phone">获取验证码</button> -->
              <div class="login-code" @click="refreshCode">
                <Identify :identifyCode="identifyCode"></Identify>
              </div>
          </div>
        </div>
        <!-- 开关 -->
        <div class="weui-cell switch">
          <div class="weui-cell_bd">使用账户密码登录</div>
          <div class="weui-cell_ft">
            <mt-switch v-model="value" @change="turn"></mt-switch>
          </div>
        </div>
      </div>
      <div class="btn-holder">
        <div class="from-group">
          <button class="btn btn-submit" type="button" @click.prevent="login">登 录</button>
        </div>
        <div class="from-group">
          <button class="btn btn-default" type="button" @click="goReg">注 册</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Identify from './identify'
import { Switch, Toast } from "mint-ui";
import axios from "axios"
// import reqPwdLogin from '../../service/getData'
export default {
  name: "login",
  data() {
    return {
      msg: "login",
      isShow: false,
      value: false,
      phone: "",
      pwd: "",
      code: "",
      model: {},
      loginWay: true,
      codeI:"",
      identifyCodes: "1234567890",
      identifyCode: ""
    }
  },
  components:{
    Identify
  },
  mounted () {
    // 初始化验证码
    this.identifyCode = ''
    this.makeCode(this.identifyCodes, 4)
  },
  computed: {},
  methods: {
    refreshCode () {
     this.identifyCode = ''
     this.makeCode(this.identifyCodes, 4)
   },
   makeCode (o, l) {
     for (let i = 0; i < l; i++) {
       this.identifyCode += this.identifyCodes[this.randomNum(0, this.identifyCodes.length)]
     }
   },
   randomNum (min, max) {
     return Math.floor(Math.random() * (max - min) + min)
   },
    turn() {
      this.isShow = this.value;
    },
    goReg() {
      this.$router.push("/reg");
    },
     validateBtn() {
                let time = 60;
                let timer = setInterval(() => {
                    if (time == 0) {
                        clearInterval(time);
                        this.btnTitle = "获取验证码";
                        this.disabled = false;
                    } else {
                        // 倒计时
                        this.btnTitle = time + "秒后重试";
                        this.disabled = true;
                        time--;
                    }
                }, 1000);
            },
    //登录函数
    login() {
      let _this = this;
      let result;
      const { phone, pwd, code } = this;
      if(this.isShow){
        if (!this.phone) {
          Toast("请输入手机");
          return;
        } else if (!this.pwd) {
          Toast("请输入密码");
          return;
        } else {
          let reg = /^1(3|4|5|6|7|8|9)\d{9}$/;
          if (!reg.test(this.phone)) {
            let instance = Toast("请输入正确手机号");
            setTimeout(() => {
              instance.close();
            }, 1000);
            return;
          }
        }
      }else{
        if (!this.phone) {
          Toast("请输入手机");
          return;
        } else if (!this.codeI) {
          Toast("请输入验证码");
          return
        } else {
          let reg = /^1(3|4|5|6|7|8|9)\d{9}$/;
          if (!reg.test(this.phone)&&this.codeI !== this.identifyCode) {
            let instance = Toast("请输入正确手机号或验证码 ");
            setTimeout(() => {
              instance.close();
            }, 1000);
            return;
          }
        }
      }

        axios.post('/login',{phone:this.phone,pwd:this.pwd}).then(res=>{
            console.log('login',res);
            if(res.data.success===0){
                sessionStorage.token=res.data.token;
                this.$store.dispatch('recordUser',res.data.user)
                _this.$router.push('/user');
            }else if(res.data.err ===2){
                Toast('密码错误')
            }
        }).catch(err=>{
            console.log('err',err)
        })
    }
  }
};
</script>


<style scoped>
.switch {
  display: flex;
  justify-content: space-between;
}
.login {
  width: 100%;
  height: 100%;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
}
h1 {
  margin: 30px auto 0;
  display: block;
  width: 120px;
  height: 60px;
  color: #cf000e;
  text-align: center;
}
.btn {
  text-align: center;
  width: 90%;
  display: block;
  height: 36px;
  line-height: 34px;
  border-radius: 5px;
  font-size: 14px;
  margin: 10px auto;
}
.btn-group {
  padding: 0 10px 0 10px;
}
.btn-submit {
  background: #cf000e;
  color: #fff;
  border: 1px solid #cf000e;
  text-decoration: none;
}
.btn-default {
  background: #fff;
  color: #cf000e;
  border: 1px solid #ccc;
  text-decoration: none;
}
.weui-cell {
  padding: 10px 15px;
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.weui-cell:before {
  border-top: 1px solid #e5e5e5;
}
.weui-label {
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
.weui-code-btn {
  outline: 0;
  border: 0;
  border-left: 1px solid #e5e5e5;
  background-color: transparent;
  display: inline-block;
  padding: 0 9px 0 12px;
  font-size: 16px;
}
</style>
