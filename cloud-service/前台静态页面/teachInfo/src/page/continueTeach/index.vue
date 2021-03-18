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
                    index: 'test10-1',
                    title: '学分管理'
                },
                {
                    index: 'test10-2',
                    title: '继教项目'
                },
                {
                    index: 'test10-3',
                    title: '科研成果'
                },
                {
                    index: 'test10-4',
                    title: '学术管理'
                },
                {
                    index: 'test10-5',
                    title: '门户维护'
                }
            ]
        }
    },
};
</script>

<style>
</style>
