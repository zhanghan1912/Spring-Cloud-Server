<template>
<div class="wrapper">
<!-- 页面头部部分 -->
    <div class="header">
        <div class="title_project">
        <div class="logo">教学管理平台</div>
        <div style="float:left;">
            <el-menu background-color="#3989fa" text-color="#fff" active-text-color="#ffd04b" :default-active="toIndex()" mode="horizontal" @select="handleSelect">
            <template v-for="item in itemss">
                <el-menu-item :index="item.index" :key="item.index">
                <template slot="title">
                    <span slot="title">{{ item.title }}</span>
                </template>
                </el-menu-item>
            </template>
            </el-menu>
        </div>
        

        <div class="header-right">
            <div class="header-user-con">
                <!-- 用户头像 -->
                <div class="user-avator"><img src="../../assets/img/img.jpg" /></div>
                <!-- 用户名下拉菜单 -->
                <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
                        {{ username }}
                        <i class="el-icon-caret-bottom"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item disabled>修改密码</el-dropdown-item>
                        <el-dropdown-item command="loginout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
        </div>
        <!-- 水平一级菜单 -->
        <div class="content_second" style="float:left;" v-if="routerBooer==true">
            <el-menu style="" :default-active="toIndex()" mode="horizontal" @select="handleSelectTwo">
            <template v-for="item in items">
                <el-menu-item :index="item.index" :key="item.index">
                <template slot="title">
                    <span slot="title">{{ item.title }}</span>
                </template>
                </el-menu-item>
            </template>
            </el-menu>
        </div>
    </div>

    <!-- 页面左侧二级菜单栏，和主体内容区域部分 -->
    <el-main>
        <router-view></router-view>
    </el-main>

</div>
</template>

<script>
export default {
    //  props: ['items'],
    data() {
        return {
            itemss: [    // 水平项目菜单栏
                { index: 'Home', title: '首页' },
                { index: 'r_doctor', title: '住培' },
                { index: 'roactice_student', title: '实习生' },
                { index: 'graduate_student', title: '进修生' },
                { index: 'engage_student', title: '研究生' },
                { index: 'permission', title: '系统管理' },
            ],
            items: [    // 水平一级菜单栏的菜单
                // { index: 'test1', title: '一级菜单1' },
                // { index: 'test2', title: '一级菜单2' },
                // { index: 'test3', title: '一级菜单3' },
            ],
            this_projectRouter:'',
            routerBooer:false
        }
    },
    computed: {
        username() {
            let username = localStorage.getItem('ms_username');
            return username ? username : this.name;
        }
    },
    methods:{
        // 根据路径绑定到对应的一级菜单，防止页面刷新重新跳回第一个
        toIndex() {
            return this.$route.path.split('/')[1];
        },
        // 切换菜单栏
        handleSelect(index) {
            // console.log("------------------",index);
           this.$router.push('/' + index);
           this.this_projectRouter=index;
           if (this.this_projectRouter=="Home") {
               this.routerBooer=false;
           } else if(this.this_projectRouter=="permission"){
               this.routerBooer=false;
           }else{
                  console.log("index----------",index);
if (index=='r_doctor') {
    this.items=[
        //  { index: 'test1', title: '住院医师一级菜单1' },
        // { index: 'test2', title: '住院医师一级菜单2' },
        // { index: 'test3', title: '住院医师一级菜单3' },
         { index: 'messageInfo', title: '信息管理' },
        { index: 'recruitInfo', title: '招录管理' },
        { index: 'beginOffice', title: '入科管理' },
        { index: 'tidyClassInfo', title: '排班管理' },
        { index: 'rotateInfo', title: '轮转管理' },
        { index: 'teachInfo', title: '教学管理' },
        { index: 'enteroffice', title: '出科管理' },
        { index: 'assessInfo', title: '考核管理' },
        { index: 'overJob', title: '结业管理' },
        { index: 'continueTeach', title: '继续教育管理' },
        { index: 'checkWork', title: '考勤管理' },
        { index: 'performanceInfo', title: '绩效管理' },
        { index: 'dormitoryInfo', title: '宿舍管理' },
        { index: 'excelInfo', title: '报表管理' },
    ]
} else if(index=='roactice_student') {
        this.items=[
         { index: 'test1', title: '实习生一级菜单1' },
        { index: 'test2', title: '实习生一级菜单2' },
        { index: 'test3', title: '实习生一级菜单3' },
    ]
}else if(index=='graduate_student') {
        this.items=[
         { index: 'test1', title: '研究生一级菜单1' },
        { index: 'test2', title: '研究生一级菜单2' },
        { index: 'test3', title: '研究生一级菜单3' },
    ]
}else if(index=='engage_student') {
        this.items=[
         { index: 'test1', title: '进修生一级菜单1' },
        { index: 'test2', title: '进修生一级菜单2' },
        { index: 'test3', title: '进修生一级菜单3' },
    ]
}else if(index=='engage_student') {
        this.items=[
         { index: 'test1', title: '一级菜单1' },
        { index: 'test2', title: '一级菜单2' },
        { index: 'test3', title: '一级菜单3' },
    ]
}else if(index=='continue_teach') {
        this.items=[
         { index: 'test1', title: '继续教育一级菜单1' },
        { index: 'test2', title: '继续教育一级菜单2' },
        { index: 'test3', title: '继续教育一级菜单3' },
    ]
}
               this.routerBooer=true;
           }
        //    console.log(this.routerBooer);
        },
        // 切换水平一级菜单
        handleSelectTwo(index){
            this.$router.push("/"+this.this_projectRouter+'/' + index);
         
        },
        // 用户名下拉菜单选择事件
        handleCommand(command) {
            if (command == 'loginout') {
                localStorage.removeItem('ms_username');
                this.$router.push('/login');
            }
        }
    }
}
</script>

<style scoped>
.wrapper {
    width: 100%;
    height: 100%;
    background: #f0f0f0;
}
.header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 140px;
    font-size: 22px;
    z-index: 10;
}
.title_project{
    position: absolute;
    width: 100%;
    z-index: 100;
    background-color: #3989fa;
}
.header .logo {
    float: left;
    margin-left: 60px;
    margin-top: 17.5px;
    height: 29px;
    width: 160px;
    color: #fff;
    vertical-align: middle;
}
/* --------------- 用户头像区域的样式 ---------------- */
.header-right {
    float: right;
    padding-right: 50px;
}
.header-user-con {
    display: flex;
    height: 70px;
    align-items: center;
}
.user-avator {
    margin-left: 20px;
}
.user-avator img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.user-name {
    margin-left: 10px;
}
.el-dropdown-link {
    cursor: pointer;
}
.el-dropdown-menu__item {
    text-align: center;
}
/* --------------- 水平一级菜单栏的样式--------------------- */
.el-menu.el-menu--horizontal {
    border-bottom: none !important;
    float: left;
    margin-left: 50px;
    /* margin-top: 65px; */
}
.el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: 2px solid #409eff;
    color: #3989fa;
    font-weight: 700;
}
.el-menu--horizontal > .el-menu-item {
    font-size: 16px;
    margin: 0 15px;
    color: black;
}
.content_second{
    position: absolute;
    top: 70px;
    left: 225px;
    width: 1500px;
    height: 80px;
    /* white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden; */
}
/* .content_second::-webkit-scrollbar{
    display: none;
} */

</style>