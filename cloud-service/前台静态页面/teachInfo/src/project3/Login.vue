<template>
    <div class="login-wrap">

      <div class="login_top">
              <img class="logo_img" src="../assets/img/logo.png" alt="">
              <span class="login_top_word">请扫描二维码下载</span>
              <img class="logo_iphone" src="../assets/img/iphone.png" alt="">
              <img class="logo_android" src="../assets/img/android.png" alt="">
      </div>
      <div class="login_middle">
        <div class="ms-login">
            <div class="ms-title">欢迎登录</div>
            <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
                <el-form-item prop="username">
                    <el-input v-model="param.username" placeholder="输入账号">
                        <el-button slot="prepend" icon="el-icon-user"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password" style="margin-top:25px;">
                    <el-input type="password" placeholder="登录密码" v-model="param.password" @keyup.enter.native="submitForm()">
                        <el-button slot="prepend" icon="el-icon-lock"></el-button>
                    </el-input>
                </el-form-item>
               <JcRange status="status"></JcRange>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                    <!-- <span>注：账号密码随便填写（ admin 是管理员，其他为普通用户）</span> -->
                </div>
            </el-form>
        </div>
        </div>
        <div class="logo_bottom">
           <p class="logo_word">版权所有：南京品德科技有限责任公司<span style="margin-left:20px">服务电话：025-68581968 400-999-6635</span></p>
        </div>
    </div>
</template>

<script>
import JcRange from "@/components/common/JcRange.vue";
export default {
    components: {
        JcRange
    },
    data: function() {
        return {
            param: {
                username: 'admin',
                password: '123456'
            },
            rules: {
                username: [{ required: true, message: '账号不能为空', trigger: 'blur' }],
                password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
            },
            status: false
        };
    },
    created() {
        this.getType();
    },
    methods: {
        getType() {
            let datas = {
                telephone: '13088888888',
                typeCode: 2
            };
            this.$api.login.getType(datas).then(res => {
                console.log('c',res);
            });
        },
        submitForm() {
            this.$refs.login.validate(valid => {
                if (valid) {
                    this.$message.success('登录成功');
                    localStorage.setItem('ms_username', this.param.username);
                    this.$router.push('/');
                } else {
                    this.$message.error('请输入账号和密码');
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    }
};
</script>

<style scoped>
.login-wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #fff;
    /* background: url('../assets/img/newlogin-bg.jpg'); */
}
.ms-title {
    width: 100%;
    text-align: center;
    font-size: 22px;
    margin: 25px 0px 15px;
}
.login_middle{
    background-image: url('../assets/img/backgroundcolor.png');
    background-size:cover;
    background-repeat: no-repeat; 
    width: 100%;
    height: 590px;
    position: absolute;
    top: 92px;
}
.ms-login {
    position: relative;
    left: 423px;
    width: 350px;
    height: 425px;
    max-width: 90%;
    margin: 84px auto;
    border-radius: 20px;
    background: white;
    overflow: hidden;
    
}
.ms-content {
    padding: 30px 30px;
}
.login-btn {
    margin-top: 10%;
}
.login-btn button {
    width: 100%;
    height: 36px;
    text-align: center;
    margin-bottom: 10px;
}
.login_top{
    margin-top: 22px;
}
.logo_img{
    width: 178px;
    height: 54px;
    margin-left: 70px;
    vertical-align: middle;
    
}
.login_top_word{
    width: 128px;
    height: 16px;
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 27px;
    color: #333333;
    margin-left: 846px; 
}
.logo_android,.logo_iphone{
   margin-left: 24px;
   vertical-align: middle;
}
.logo_word{
    text-align: center;
    position: relative;
    top: 650px;
}
</style>
