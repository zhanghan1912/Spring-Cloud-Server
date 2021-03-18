<template>
<div>
    <el-aside>
        <SideMenu :items='items'></SideMenu>
    </el-aside>
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
                    index: 'test2-1',
                    title: '招生计划发布'
                },
                {
                    index: 'test2-2',
                    title: '网上报名'
                },
                {
                    index: 'test2-3',
                    title: '报名信息审核'
                },
                {
                    index: 'test2-4',
                    title: '录取信息'
                },
                {
                    index: 'test2-5',
                    title: '学员报道信息'
                },
        ],
        }
    },
}
</script>

<style scoped>
</style>