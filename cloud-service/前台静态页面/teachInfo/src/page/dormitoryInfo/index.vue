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
                    index: 'test12-1',
                    title: '宿舍信息维护'
                },
                {
                    index: 'test12-2',
                    title: '宿舍信息'
                },
                {
                    index: 'test12-3',
                    title: '学员住宿信息'
                },
                {
                    index: 'test12-4',
                    title: '宿舍报修'
                }
            ]
        }
    },
};
</script>

<style>
</style>
