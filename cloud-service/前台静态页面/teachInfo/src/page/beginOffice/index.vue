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
                    index: 'test3-1',
                    title: '入科报道'
                },
                {
                    index: 'test3-2',
                    title: '入科报道管理'
                },
                {
                    index: 'test3-3',
                    title: '入科教育'
                }
            ]
        }
    },
};
</script>

<style>
</style>
