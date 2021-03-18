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
                    index: 'test8-1',
                    title: '理论考核'
                },
                {
                    index: 'test8-2',
                    title: '技能考核'
                }
            ]
        }
    },
};
</script>

<style>
</style>
