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
                    index: 'test7-1',
                    title: '出科评价'
                },
                {
                    index: 'test7-2',
                    title: '出科考核表'
                },
                {
                    index: 'test7-3',
                    title: '查询统计'
                }
            ]
        }
    },
};
</script>

<style>
</style>
