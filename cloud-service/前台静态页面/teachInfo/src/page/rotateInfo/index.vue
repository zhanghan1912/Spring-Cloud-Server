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
                    index: 'test5-1',
                    title: '医院方案配置'
                },
                {
                    index: 'test5-2',
                    title: '学员排班管理'
                },
                {
                    index: 'test5-3',
                    title: '自动排班'
                }
            ]
        }
    },
};
</script>

<style>
</style>
