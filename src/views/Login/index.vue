<template>
	<el-form :model="form" status-icon :rules="rules"  ref="form" label-width="100px" class="login-container">
    <h3 class="login-title">系统登录</h3>
    <el-form-item label="用户名" label-width="80px" prop="username" class="username">
      <el-input type="input" v-model="form.username" auto-complete="off" placeholder="请输入账号"></el-input>
    </el-form-item>
    <el-form-item label="密码" label-width="80px" prop="password" class="password">
      <el-input type="password" v-model="form.password" auto-complete="off" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-from-item class="loginSubmit">
      <el-button type="primary" @click="login" class="loginSubmit">登录</el-button>
    </el-from-item>
	</el-form>
</template>

<script>
import Mock from 'mockjs'
import {getMenu} from '../../../api/data'
export default {
	name: "Login",
	data() {
		return {
			form: {},
			rules: {
				username: [
        { required: true, message: "请输入用户名",trigger:'blur'}, 
        {
          min:3,
          message:'不能小于三位',
          trigger:'blur'
        },
        {
          max:10,
          message:'不能大于十位',
          trigger:'blur'
        }
        ],
        password:[
          {required:true,message:"请输入密码",trigger:'blur'},
        ]
			},
		};
	},
  methods: {
    login(){
      getMenu(this.form).then(res=>{
        if (res.code===20000) {
          this.$message({
            type:'success',
            message:'登录成功'
          })
        }else{
          this.$message.warning(res.data.message)
        }
      })
      const token= Mock.Random.guid()
      this.$store.commit('setToken',token)
      this.$router.push({name:'home'})

    }
  },
};
</script>

<style lang="less" scoped>
.login-container{
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px ;
  background-color: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.login-title{
  margin: 0 auto 40px auto;
  text-align: center;
  color: #505458;
}
.loginSubmit{
  margin: 10px auto;
  transform: translateX(200%);
}
</style>