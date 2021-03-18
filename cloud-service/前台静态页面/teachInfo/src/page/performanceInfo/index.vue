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
                    index: 'test11-1',
                    title: '基准分设置'
                },
                {
                    index: 'test11-2',
                    title: '津贴管理'
                },
                {
                    index: 'test11-3',
                    title: '查询统计'
                }
            ]
        }
    },
};
</script>

<style>
</style>
