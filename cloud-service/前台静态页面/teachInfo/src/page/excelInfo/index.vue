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
                    index: 'test13-1',
                    title: '基地报表'
                },
                {
                    index: 'test13-2',
                    title: '科室报表'
                },
                {
                    index: 'test13-3',
                    title: '带教报表'
                }
            ]
        }
    },
};
</script>

<style>
</style>
