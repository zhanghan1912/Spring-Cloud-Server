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
                    index: 'test9-1',
                    title: '学员结业管理'
                },
                {
                    index: 'test9-2',
                    title: '延期结业审核'
                },
                {
                    index: 'test9-3',
                    title: '结业成绩'
                },
                {
                    index: 'test9-4',
                    title: '理论补考报名'
                },
                {
                    index: 'test9-5',
                    title: '理论补考查询'
                },
                {
                    index: 'test9-6',
                    title: '技能补考报名'
                },
                {
                    index: 'test9-7',
                    title: '技能补考查询'
                },
                {
                    index: 'test9-8',
                    title: '证书信息查询'
                }
            ]
        }
    },
};
</script>

<style>
</style>
