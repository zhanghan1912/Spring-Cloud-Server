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
                    index: 'test6-1',
                    title: '评价指标维护'
                },
                {
                    index: 'test6-2',
                    title: '讲座管理'
                },
                {
                    index: 'test6-3',
                    title: '教学活动'
                },
                {
                    index: 'test6-4',
                    title: '查询活动'
                }
            ]
        }
    },
};
</script>

<style>
</style>
