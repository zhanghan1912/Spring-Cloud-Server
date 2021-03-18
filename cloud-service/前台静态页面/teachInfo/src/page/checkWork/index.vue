<template>
<div>
    <el-aside>
        <SideMenu :items="items"></SideMenu>
    </el-aside>
    <el-main>
        <router-view></router-view>
    </el-main>
</div>
</template>

<script>
import SideMenu from '@/components/sidemenu/SideMenu';
export default {
    components: {
        SideMenu
    },
    data() {
        return {
            items: [
                {
                    index: 'test14-1',
                    title: '考勤设置'
                },
                {
                    index: 'test14-2',
                    title: '日常考勤'
                },
                {
                    index: 'test14-3',
                    title: '请假管理'
                },
                {
                    index: 'test14-4',
                    title: '查询统计'
                }
            ]
        }
    },
};
</script>

<style>
</style>
