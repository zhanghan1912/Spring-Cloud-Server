<template>
<div>
    <!-- 一级菜单下面所拥有的二级菜单 -->
    <el-aside>
         <SideMenu :items='items'></SideMenu>
    </el-aside>

    <!-- 以及二级菜单所对应的页面 -->
    <el-main>
        <router-view></router-view>
    </el-main>

</div>
</template>

<script>
import SideMenu from '@/components/sidemenu/SideMenu';
export default {
    components:{
        SideMenu
    },
    data(){
        return {
            items: [
            {
                index: 'test1-1',
                title: '用户管理',
            },
            {
                index: 'test1-2',
                title: '角色管理'
            },
            {
                index: 'test1-3',
                title: '字典信息维护'
            },
            {
                index: 'test1-4',
                title: '操作日志查看'
            },
            {
                index: 'test1-5',
                title: '个人信息'
            },
            {
                index: 'test1-6',
                title: '安全中心'
            }
        ],
        }
    }
}
</script>

<style scoped>
</style>