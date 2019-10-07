<template>
  <div id="message">
    <nav-header>
      <span slot="title">登录</span>
    </nav-header>
    <div class="container">
      <div id="login">
        <!-- <h1 style="position: absolute;left:50%;">登录</h1> -->
        <div
          class="username_box"
          style="position: absolute;
			left: 50%;
			width: 70%;
			margin-left: -35%;
           margin-top:30%;
			height: 30px;
			border-radius: 5px;
			background-color: #FAFAFA;
			border:1px solid #FAFAFA;
			-webkit-box-shadow: 5px 5px 5px rgba(0,0,0,.1);"
        >
          <input
            class="username_input"
            type="text"
           
            placeholder="邮箱/手机号/帐号"
            style="width: 100%;
			background-color: #FFFFFF;
			border:0;
            
			height: 30px;
			text-align: center;" v-model="userinfo.username"
          /><!-- background-color账号框颜色 -->
        </div>
        <div
          class="password_box"
          style="position: absolute;
			top:40px;
			left: 50%;
			width: 70%;
            margin-top:40%;
			margin-left: -35%;
			height: 30px;
			border-radius: 5px;
			background-color: #white;
			border:1px solid #fff;
			-webkit-box-shadow: 5px 5px 5px rgba(0,0,0,.1);"
        >
          <input
            class="password_input"
            type="password"
          
            placeholder="请输入密码"
            style="width: 100%;
			background-color: #FFFFFF;
			border:0;
			height: 30px;
			text-align: center;" v-model="userinfo.password"
          /><!-- background-color密码框颜色 -->
        </div>
        <div
          class="submit_box"
          @click="login()"
          style="position: absolute;
			top:80px;
			left: 65%;
			width: 40%;
			margin-left: -35%;
         margin-top:50%;
			height: 30px;
			border-radius: 5px;
			background-color: #888;
			border:1px solid #fff;"
        >
          <input
            class="submit_input"
            type="submit"
            name
            value="登录"
            @click="login()"
            style="width: 100%;
			background-color: #0000; 
			border:0;
			height: 30px;
			text-align: center;
			color: #fff;"
          />
<!-- background-color登录按钮颜色 -->
        
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavHeader from "../components/NavHeader";

export default {
  name: "message",
  data() {
    return {
       
        userinfo:[
  			{
  			username: '',
  			},
  			{
  			password: '',
  			}
 
          ],
          };
  },
  components: {
    NavHeader
  },
  methods: {
    attention() {
      this.$router.push({ path: "/attention" });
    },
    login() {
      if(this.userinfo.username == "admin" && this.userinfo.password == "admin"){
          this.$router.push({path: "/message"})
      }else{
          this.$toast('用户名或密码错误');
      }
    },
    map() {
      this.$router.push({ path: "/map" });
    },
    history() {
      this.$router.push({ path: "/history" });
    }
  }
};
</script>

<style lang="stylus">
#message {
  .container {
    background-color: #EEEEEE;
    position: fixed;
    top: 3rem;
    bottom: 3.5rem;
    width: 100%;

    .container-header {
      text-align: center;

      i {
        font-size: 3rem;
        border: 2px solid #D9D8D9;
        border-radius: 50%;
      }

      .login {
        display: block;
        margin-top: 1rem;

        span {
          border: 2px solid #D9D8D9;
          padding: 0.2rem;
          border-radius: 0.9rem;
        }
      }
    }

    .container-body {
      .item {
        border-radius: 0.2rem;
        background-color: #FAFAFA;
        margin: 1.5rem 2rem;
        display: flex;
        justify-content: space-between;
        padding: 0.7rem 0.9rem;
      }
    }
  }
}
</style>
