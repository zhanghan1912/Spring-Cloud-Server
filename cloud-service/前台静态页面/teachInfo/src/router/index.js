import Vue from 'vue';
import Router from 'vue-router';

// 如果使用模块化机制编程，导入Vue和VueRouter
Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: () => import('../components/common/Whole.vue'),
            meta: {
                title: '整体页面布局'
            },
            children: [{
                    path: '/dashboard',
                    component: () => import('../page/Dashboard.vue'),
                    meta: {
                        title: '首页'
                    },
                    redirect:'/Home',     // 该配置是若点击选择父目录时，默认选中该父目录下的子路径页面
                        children: [{
                            path: '/Home',
                            component: () => import('../page/Dashboard.vue'),
                            meta: {
                                title: '首页'
                            },
                        }               
                ]
                },
                {
                    path: '/r_doctor',
                    component: () => import('../page/messageInfo/index.vue'),
                    meta: {
                        title: '住培'
                    },
                    redirect:'/r_doctor/messageInfo/test1-1/test1-1-1',     // 该配置是若点击选择一级菜单时，默认选中并跳转到该一级菜单下的第一个二级菜单下的第一个三级菜单
                    children:[
                    {
                        path: '/r_doctor/messageInfo',
                        component: () => import('../page/messageInfo/index.vue'),
                        meta: {
                            title: '信息管理'
                        },
                            redirect:'/r_doctor/messageInfo/test1-1/test1-1-1',     // 该配置是若点击选择一级菜单时，默认选中并跳转到该一级菜单下的第一个二级菜单
                            children:[
                                {
                                    path: '/r_doctor/messageInfo/test1-1',
                                    component: () => import('../page/messageInfo/index.vue'),
                                    meta: {
                                        title: '系统管理'
                                    },
                                    redirect:'/r_doctor/messageInfo/test1-1/test1-1-1',
                                    children:[
                                        {
                                            path: '/r_doctor/messageInfo/test1-1/test1-1-1',
                                            component: () => import('../page/messageInfo/test1-1/test1-1-1.vue'),
                                            meta: {
                                                title: '用户管理'
                                            },
                                        },
                                        {
                                            path: '/r_doctor/messageInfo/test1-1/test1-1-2',
                                            component: () => import('../page/messageInfo/test1-1/test1-1-2.vue'),
                                            meta: {
                                                title: '角色管理'
                                            },
                                        }
                                    ]
                                },
                            {
                                path: '/r_doctor/messageInfo/test1-2',
                                component: () => import('../page/messageInfo/test1-2.vue'),
                                meta: {
                                    title: '基地管理'
                                },
                            },
                            {
                                path: 'test1-3',
                                component: () => import('../page/messageInfo/test1-3.vue'),
                                meta: {
                                    title: '组织管理'
                                },
                            },
                            {
                                path: 'test1-4',
                                component: () => import('../page/messageInfo/test1-4.vue'),
                                meta: {
                                    title: '学员管理'
                                },
                            },
                            {
                                path: 'test1-5',
                                component: () => import('../page/messageInfo/test1-5.vue'),
                                meta: {
                                    title: '师资管理'
                                },
                            }
                            ,
                            {
                                path: 'test1-6',
                                component: () => import('../page/messageInfo/test1-6.vue'),
                                meta: {
                                    title: '通知管理'
                                },
                            }
                            ,
                            {
                                path: 'test1-7',
                                component: () => import('../page/messageInfo/test1-7.vue'),
                                meta: {
                                    title: '意见反馈'
                                },
                            }
                        ]
                },
                {
                    path: '/r_doctor/recruitInfo',
                    component: () => import('../page/recruitInfo/index.vue'),
                    meta: {
                        title: '招录管理'
                    },
                    redirect:'/r_doctor/recruitInfo/test2-1',     // 该配置是若点击选择父目录时，默认选中该父目录下的子路径页面
                        children:[
                            {
                                path: 'test2-1',
                                component: () => import('../page/recruitInfo/test2-1.vue'),
                                meta: {
                                    title: '二级菜单2-1'
                                },
                            },
                            {
                                path: 'test2-2',
                                component: () => import('../page/recruitInfo/test2-2.vue'),
                                meta: {
                                    title: '二级菜单2-2'
                                },
                            },
                            {
                                path: 'test2-3',
                                component: () => import('../page/recruitInfo/test2-3.vue'),
                                meta: {
                                    title: '二级菜单2-3'
                                },
                            },
                        ]
                },
                {
                    path: '/r_doctor/beginOffice',
                    component: () => import('../page/beginOffice/index.vue'),
                    meta: {
                        title: '入科管理'
                    },
                    redirect:'/r_doctor/beginOffice/test3-1',
                    children:[
                        {
                            path: 'test3-1',
                            component: () => import('../page/beginOffice/test3-1.vue'),
                            meta: {
                                title: '二级菜单3-1'
                            }
                        },
                        {
                            path: 'test3-2',
                            component: () => import('../page/beginOffice/test3-2.vue'),
                            meta: {
                                title: '二级菜单3-2'
                            }
                        },
                    ]
                },
                {
                    path: '/r_doctor/tidyClassInfo',
                    component: () => import('../page/tidyClassInfo/index.vue'),
                    meta: {
                        title: '排班管理'
                    },
                    redirect:'/r_doctor/tidyClassInfo/test4-1',
                    children:[
                        {
                            path: 'test4-1',
                            component: () => import('../page/tidyClassInfo/test4-1.vue'),
                            meta: {
                                title: '二级菜单4-1'
                            }
                        },
                        {
                            path: 'test4-2',
                            component: () => import('../page/tidyClassInfo/test4-2.vue'),
                            meta: {
                                title: '二级菜单4-2'
                            }
                        },
                        {
                            path: 'test4-3',
                            component: () => import('../page/tidyClassInfo/test4-3.vue'),
                            meta: {
                                title: '二级菜单4-3'
                            }
                        },
                    ]
                },
                {
                    path: '/r_doctor/rotateInfo',
                    component: () => import('../page/rotateInfo/index.vue'),
                    meta: {
                        title: '轮转管理'
                    },
                    redirect:'/r_doctor/rotateInfo/test5-1',
                    children:[
                        {
                            path: 'test5-1',
                            component: () => import('../page/rotateInfo/test5-1.vue'),
                            meta: {
                                title: '二级菜单5-1'
                            },
                        },
                        {
                            path: 'test5-2',
                            component: () => import('../page/rotateInfo/test5-2.vue'),
                            meta: {
                                title: '二级菜单5-2'
                            },
                        },
                        {
                            path: 'test5-3',
                            component: () => import('../page/rotateInfo/test5-3.vue'),
                            meta: {
                                title: '二级菜单5-3'
                            },
                        },
                    ]
                },
                {
                    path: '/r_doctor/teachInfo',
                    component: () => import('../page/teachInfo/index.vue'),
                    meta: {
                        title: '教学管理'
                    },
                    redirect:'/r_doctor/teachInfo/test6-1',
                    children:[
                        {
                            path: 'test6-1',
                            component: () => import('../page/teachInfo/test6-1.vue'),
                            meta: {
                                title: '二级菜单6-1'
                            },
                        },
                        {
                            path: 'test6-2',
                            component: () => import('../page/teachInfo/test6-2.vue'),
                            meta: {
                                title: '二级菜单6-2'
                            },
                        },
                        {
                            path: 'test6-3',
                            component: () => import('../page/teachInfo/test6-3.vue'),
                            meta: {
                                title: '二级菜单6-3'
                            },
                        },
                        {
                            path: 'test6-4',
                            component: () => import('../page/teachInfo/test6-4.vue'),
                            meta: {
                                title: '二级菜单6-4'
                            },
                        },
                    ]
                },
                {
                    path: '/r_doctor/enteroffice',
                    component: () => import('../page/enteroffice/index.vue'),
                    meta: {
                        title: '出科管理'
                    },
                    redirect:'/r_doctor/enteroffice/test7-1',
                    children:[
                        {
                            path: 'test7-1',
                            component: () => import('../page/enteroffice/test7-1.vue'),
                            meta: {
                                title: '二级菜单7-1'
                            },
                        },
                        {
                            path: 'test7-2',
                            component: () => import('../page/enteroffice/test7-2.vue'),
                            meta: {
                                title: '二级菜单7-2'
                            },
                        },
                        {
                            path: 'test7-3',
                            component: () => import('../page/enteroffice/test7-3.vue'),
                            meta: {
                                title: '二级菜单7-3'
                            },
                        }
                    ]
                },
                {
                    path: '/r_doctor/assessInfo',
                    component: () => import('../page/assessInfo/index.vue'),
                    meta: {
                        title: '考核管理'
                    },
                    redirect:'/r_doctor/assessInfo/test8-1',
                    children:[
                        {
                            path: 'test8-1',
                            component: () => import('../page/assessInfo/test8-1.vue'),
                            meta: {
                                title: '二级菜单8-1'
                            },
                        },
                        {
                            path: 'test8-2',
                            component: () => import('../page/assessInfo/test8-2.vue'),
                            meta: {
                                title: '二级菜单8-2'
                            },
                        }
                    ]
                },
                {
                    path: '/r_doctor/overJob',
                    component: () => import('../page/overJob/index.vue'),
                    meta: {
                        title: '结业管理'
                    },
                    redirect:'/r_doctor/overJob/test9-1',
                    children:[
                        {
                            path: 'test9-1',
                            component: () => import('../page/overJob/test9-1.vue'),
                            meta: {
                                title: '二级菜单9-1'
                            },
                        },
                        {
                            path: 'test9-2',
                            component: () => import('../page/overJob/test9-2.vue'),
                            meta: {
                                title: '二级菜单9-2'
                            },
                        },
                        {
                            path: 'test9-3',
                            component: () => import('../page/overJob/test9-3.vue'),
                            meta: {
                                title: '二级菜单9-3'
                            },
                        },
                        {
                            path: 'test9-4',
                            component: () => import('../page/overJob/test9-4.vue'),
                            meta: {
                                title: '二级菜单9-4'
                            },
                        },
                        {
                            path: 'test9-5',
                            component: () => import('../page/overJob/test9-5.vue'),
                            meta: {
                                title: '二级菜单9-5'
                            },
                        },
                        {
                            path: 'test9-6',
                            component: () => import('../page/overJob/test9-6.vue'),
                            meta: {
                                title: '二级菜单9-6'
                            },
                        },
                        {
                            path: 'test9-7',
                            component: () => import('../page/overJob/test9-7.vue'),
                            meta: {
                                title: '二级菜单9-7'
                            },
                        },
                        {
                            path: 'test9-8',
                            component: () => import('../page/overJob/test9-8.vue'),
                            meta: {
                                title: '二级菜单9-8'
                            },
                        }
                    ]
                },
                {
                    path: '/r_doctor/continueTeach',
                    component: () => import('../page/continueTeach/index.vue'),
                    meta: {
                        title: '继续教育管理'
                    },
                    redirect:'/r_doctor/continueTeach/test10-1',
                    children:[
                        {
                            path: 'test10-1',
                            component: () => import('../page/continueTeach/test10-1.vue'),
                            meta: {
                                title: '二级菜单10-1'
                            },
                        },
                        {
                            path: 'test10-2',
                            component: () => import('../page/continueTeach/test10-2.vue'),
                            meta: {
                                title: '二级菜单10-2'
                            },
                        },
                        {
                            path: 'test10-3',
                            component: () => import('../page/continueTeach/test10-3.vue'),
                            meta: {
                                title: '二级菜单10-3'
                            },
                        },
                        {
                            path: 'test10-4',
                            component: () => import('../page/continueTeach/test10-4.vue'),
                            meta: {
                                title: '二级菜单10-4'
                            },
                        },
                        {
                            path: 'test10-5',
                            component: () => import('../page/continueTeach/test10-5.vue'),
                            meta: {
                                title: '二级菜单10-5'
                            },
                        }
                    ]
                },
                {
                    path: '/r_doctor/performanceInfo',
                    component: () => import('../page/performanceInfo/index.vue'),
                    meta: {
                        title: '绩效管理'
                    },
                    redirect:'/r_doctor/performanceInfo/test11-1',
                    children:[
                        {
                            path: 'test11-1',
                            component: () => import('../page/performanceInfo/test11-1.vue'),
                            meta: {
                                title: '二级菜单11-1'
                            },
                        },
                        {
                            path: 'test11-2',
                            component: () => import('../page/performanceInfo/test11-2.vue'),
                            meta: {
                                title: '二级菜单11-2'
                            },
                        },
                        {
                            path: 'test11-3',
                            component: () => import('../page/performanceInfo/test11-3.vue'),
                            meta: {
                                title: '二级菜单11-3'
                            },
                        }
                    ]
                },
                {
                    path: '/r_doctor/dormitoryInfo',
                    component: () => import('../page/dormitoryInfo/index.vue'),
                    meta: {
                        title: '宿舍管理'
                    },
                    redirect:'/r_doctor/dormitoryInfo/test12-1',
                    children:[
                        {
                            path: 'test12-1',
                            component: () => import('../page/dormitoryInfo/test12-1.vue'),
                            meta: {
                                title: '二级菜单12-1'
                            },
                        },
                        {
                            path: 'test12-2',
                            component: () => import('../page/dormitoryInfo/test12-2.vue'),
                            meta: {
                                title: '二级菜单12-2'
                            },
                        },
                        {
                            path: 'test12-3',
                            component: () => import('../page/dormitoryInfo/test12-3.vue'),
                            meta: {
                                title: '二级菜单12-3'
                            },
                        },
                        {
                            path: 'test12-4',
                            component: () => import('../page/dormitoryInfo/test12-4.vue'),
                            meta: {
                                title: '二级菜单12-4'
                            },
                        }
                    ]
                },
                {
                    path: '/r_doctor/excelInfo',
                    component: () => import('../page/excelInfo/index.vue'),
                    meta: {
                        title: '报表管理'
                    },
                    redirect:'/r_doctor/excelInfo/test13-1',
                    children:[
                        {
                            path: 'test13-1',
                            component: () => import('../page/excelInfo/test13-1.vue'),
                            meta: {
                                title: '二级菜单13-1'
                            },
                        },
                        {
                            path: 'test13-2',
                            component: () => import('../page/excelInfo/test13-2.vue'),
                            meta: {
                                title: '二级菜单13-2'
                            },
                        },
                        {
                            path: 'test13-3',
                            component: () => import('../page/excelInfo/test13-3.vue'),
                            meta: {
                                title: '二级菜单13-3'
                            },
                        }
                    ]
                },
                {
                    path: '/r_doctor/checkWork',
                    component: () => import('../page/checkWork/index.vue'),
                    meta: {
                        title: '考勤管理'
                    },
                    redirect:'/r_doctor/checkWork/test14-1',
                    children:[
                        {
                            path: 'test14-1',
                            component: () => import('../page/checkWork/test14-1.vue'),
                            meta: {
                                title: '二级菜单14-1'
                            },
                        },
                        {
                            path: 'test14-2',
                            component: () => import('../page/checkWork/test14-2.vue'),
                            meta: {
                                title: '二级菜单14-2'
                            },
                        },
                        {
                            path: 'test14-3',
                            component: () => import('../page/checkWork/test14-3.vue'),
                            meta: {
                                title: '二级菜单14-3'
                            },
                        },
                        {
                            path: 'test14-4',
                            component: () => import('../page/checkWork/test14-4.vue'),
                            meta: {
                                title: '二级菜单14-4'
                            },
                        }
                    ]
                },
                ],
            },
            {
                path: '/roactice_student',
                component: () => import('../project1/test1/index.vue'),
                meta: {
                    title: '项目二'
                },
                redirect:'/roactice_student/test1/test1-1',     // 该配置是若点击选择一级菜单时，默认选中并跳转到该一级菜单下的第一个二级菜单
            children:[
            {
                path: '/roactice_student/test1',
                component: () => import('../project1/test1/index.vue'),
                meta: {
                    title: '一级菜单1'
                },
                redirect:'/roactice_student/test1/test1-1',     // 该配置是若点击选择一级菜单时，默认选中并跳转到该一级菜单下的第一个二级菜单
                    children:[
                        {
                            path: 'test1-1',
                            component: () => import('../project1/test1/test1-1.vue'),
                            meta: {
                                title: '二级菜单1-1'
                            },
                        },
                        {
                            path: 'test1-2',
                            component: () => import('../project1/test1/test1-2.vue'),
                            meta: {
                                title: '二级菜单1-2'
                            },
                        },
                        {
                            path: 'test1-3',
                            component: () => import('../project1/test1/test1-3.vue'),
                            meta: {
                                title: '二级菜单1-3'
                            },
                        },
                        {
                            path: 'test1-4',
                            component: () => import('../project1/test1/test1-4.vue'),
                            meta: {
                                title: '二级菜单1-4'
                            },
                        },
                        {
                            path: 'test1-5',
                            component: () => import('../project1/test1/test1-5.vue'),
                            meta: {
                                title: '二级菜单1-5'
                            },
                        }
                    ]
            },
            {
                path: '/roactice_student/test2',
                component: () => import('../project1/test2/index.vue'),
                meta: {
                    title: '一级菜单2'
                },
                redirect:'/roactice_student/test2/test2-1',     // 该配置是若点击选择父目录时，默认选中该父目录下的子路径页面
                    children:[
                        {
                            path: 'test2-1',
                            component: () => import('../project1/test2/test2-1.vue'),
                            meta: {
                                title: '二级菜单2-1'
                            },
                        },
                        {
                            path: 'test2-2',
                            component: () => import('../project1/test2/test2-2.vue'),
                            meta: {
                                title: '二级菜单2-2'
                            },
                        },
                        {
                            path: 'test2-3',
                            component: () => import('../project1/test2/test2-3.vue'),
                            meta: {
                                title: '二级菜单2-3'
                            },
                        },
                    ]
            },
            {
                path: '/roactice_student/test3',
                component: () => import('../project1/test3/index.vue'),
                meta: {
                    title: '一级菜单3'
                },
                redirect:'/roactice_student/test3/test3-1',
                children:[
                    {
                        path: 'test3-1',
                        component: () => import('../project1/test3/test3-1.vue'),
                        meta: {
                            title: '二级菜单3-1'
                        }
                    },
                    {
                        path: 'test3-2',
                        component: () => import('../project1/test3/test3-2.vue'),
                        meta: {
                            title: '二级菜单3-2'
                        }
                    },
                ]
            },
            ],
        },
        {
            path: '/graduate_student',
            component: () => import('../project2/test1/index.vue'),
            meta: {
                title: '项目三'
            },
            redirect:'/graduate_student/test1/test1-1',     // 该配置是若点击选择一级菜单时，默认选中并跳转到该一级菜单下的第一个二级菜单
        children:[
        {
            path: '/graduate_student/test1',
            component: () => import('../project2/test1/index.vue'),
            meta: {
                title: '一级菜单1'
            },
            redirect:'/graduate_student/test1/test1-1',     // 该配置是若点击选择一级菜单时，默认选中并跳转到该一级菜单下的第一个二级菜单
                children:[
                    {
                        path: 'test1-1',
                        component: () => import('../project2/test1/test1-1.vue'),
                        meta: {
                            title: '二级菜单1-1'
                        },
                    },
                    {
                        path: 'test1-2',
                        component: () => import('../project2/test1/test1-2.vue'),
                        meta: {
                            title: '二级菜单1-2'
                        },
                    },
                    {
                        path: 'test1-3',
                        component: () => import('../project2/test1/test1-3.vue'),
                        meta: {
                            title: '二级菜单1-3'
                        },
                    },
                    {
                        path: 'test1-4',
                        component: () => import('../project2/test1/test1-4.vue'),
                        meta: {
                            title: '二级菜单1-4'
                        },
                    },
                    {
                        path: 'test1-5',
                        component: () => import('../project2/test1/test1-5.vue'),
                        meta: {
                            title: '二级菜单1-5'
                        },
                    }
                ]
        },
        {
            path: '/graduate_student/test2',
            component: () => import('../project2/test2/index.vue'),
            meta: {
                title: '一级菜单2'
            },
            redirect:'/graduate_student/test2/test2-1',     // 该配置是若点击选择父目录时，默认选中该父目录下的子路径页面
                children:[
                    {
                        path: 'test2-1',
                        component: () => import('../project2/test2/test2-1.vue'),
                        meta: {
                            title: '二级菜单2-1'
                        },
                    },
                    {
                        path: 'test2-2',
                        component: () => import('../project2/test2/test2-2.vue'),
                        meta: {
                            title: '二级菜单2-2'
                        },
                    },
                    {
                        path: 'test2-3',
                        component: () => import('../project2/test2/test2-3.vue'),
                        meta: {
                            title: '二级菜单2-3'
                        },
                    },
                ]
        },
        {
            path: '/graduate_student/test3',
            component: () => import('../project2/test3/index.vue'),
            meta: {
                title: '一级菜单3'
            },
            redirect:'/graduate_student/test3/test3-1',
            children:[
                {
                    path: 'test3-1',
                    component: () => import('../project2/test3/test3-1.vue'),
                    meta: {
                        title: '二级菜单3-1'
                    }
                },
                {
                    path: 'test3-2',
                    component: () => import('../project2/test3/test3-2.vue'),
                    meta: {
                        title: '二级菜单3-2'
                    }
                },
            ]
        },
        ],
    },
    {
        path: '/engage_student',
        component: () => import('../project3/test1/index.vue'),
        meta: {
            title: '项目四'
        },
        redirect:'/engage_student/test1/test1-1',     // 该配置是若点击选择一级菜单时，默认选中并跳转到该一级菜单下的第一个二级菜单
    children:[
    {
        path: '/engage_student/test1',
        component: () => import('../project3/test1/index.vue'),
        meta: {
            title: '一级菜单1'
        },
        redirect:'/engage_student/test1/test1-1',     // 该配置是若点击选择一级菜单时，默认选中并跳转到该一级菜单下的第一个二级菜单
            children:[
                {
                    path: 'test1-1',
                    component: () => import('../project3/test1/test1-1.vue'),
                    meta: {
                        title: '二级菜单1-1'
                    },
                },
                {
                    path: 'test1-2',
                    component: () => import('../project3/test1/test1-2.vue'),
                    meta: {
                        title: '二级菜单1-2'
                    },
                },
                {
                    path: 'test1-3',
                    component: () => import('../project3/test1/test1-3.vue'),
                    meta: {
                        title: '二级菜单1-3'
                    },
                },
                {
                    path: 'test1-4',
                    component: () => import('../project3/test1/test1-4.vue'),
                    meta: {
                        title: '二级菜单1-4'
                    },
                },
                {
                    path: 'test1-5',
                    component: () => import('../project3/test1/test1-5.vue'),
                    meta: {
                        title: '二级菜单1-5'
                    },
                }
            ]
    },
    {
        path: '/engage_student/test2',
        component: () => import('../project3/test2/index.vue'),
        meta: {
            title: '一级菜单2'
        },
        redirect:'/engage_student/test2/test2-1',     // 该配置是若点击选择父目录时，默认选中该父目录下的子路径页面
            children:[
                {
                    path: 'test2-1',
                    component: () => import('../project3/test2/test2-1.vue'),
                    meta: {
                        title: '二级菜单2-1'
                    },
                },
                {
                    path: 'test2-2',
                    component: () => import('../project3/test2/test2-2.vue'),
                    meta: {
                        title: '二级菜单2-2'
                    },
                },
                {
                    path: 'test2-3',
                    component: () => import('../project3/test2/test2-3.vue'),
                    meta: {
                        title: '二级菜单2-3'
                    },
                },
            ]
    },
    {
        path: '/engage_student/test3',
        component: () => import('../project3/test3/index.vue'),
        meta: {
            title: '一级菜单3'
        },
        redirect:'/engage_student/test3/test3-1',
        children:[
            {
                path: 'test3-1',
                component: () => import('../project3/test3/test3-1.vue'),
                meta: {
                    title: '二级菜单3-1'
                }
            },
            {
                path: 'test3-2',
                component: () => import('../project3/test3/test3-2.vue'),
                meta: {
                    title: '二级菜单3-2'
                }
            },
        ]
    },
    ],
},
{
    path: '/continue_teach',
    component: () => import('../project4/test1/index.vue'),
    meta: {
        title: '项目五'
    },
    redirect:'/continue_teach/test1/test1-1',     // 该配置是若点击选择一级菜单时，默认选中并跳转到该一级菜单下的第一个二级菜单
children:[
{
    path: '/continue_teach/test1',
    component: () => import('../project4/test1/index.vue'),
    meta: {
        title: '一级菜单1'
    },
    redirect:'/continue_teach/test1/test1-1',     // 该配置是若点击选择一级菜单时，默认选中并跳转到该一级菜单下的第一个二级菜单
        children:[
            {
                path: 'test1-1',
                component: () => import('../project4/test1/test1-1.vue'),
                meta: {
                    title: '二级菜单1-1'
                },
            },
            {
                path: 'test1-2',
                component: () => import('../project4/test1/test1-2.vue'),
                meta: {
                    title: '二级菜单1-2'
                },
            },
            {
                path: 'test1-3',
                component: () => import('../project4/test1/test1-3.vue'),
                meta: {
                    title: '二级菜单1-3'
                },
            },
            {
                path: 'test1-4',
                component: () => import('../project4/test1/test1-4.vue'),
                meta: {
                    title: '二级菜单1-4'
                },
            },
            {
                path: 'test1-5',
                component: () => import('../project4/test1/test1-5.vue'),
                meta: {
                    title: '二级菜单1-5'
                },
            }
        ]
},
{
    path: '/continue_teach/test2',
    component: () => import('../project4/test2/index.vue'),
    meta: {
        title: '一级菜单2'
    },
    redirect:'/continue_teach/test2/test2-1',     // 该配置是若点击选择父目录时，默认选中该父目录下的子路径页面
        children:[
            {
                path: 'test2-1',
                component: () => import('../project4/test2/test2-1.vue'),
                meta: {
                    title: '二级菜单2-1'
                },
            },
            {
                path: 'test2-2',
                component: () => import('../project4/test2/test2-2.vue'),
                meta: {
                    title: '二级菜单2-2'
                },
            },
            {
                path: 'test2-3',
                component: () => import('../project4/test2/test2-3.vue'),
                meta: {
                    title: '二级菜单2-3'
                },
            },
        ]
},
{
    path: '/continue_teach/test3',
    component: () => import('../project4/test3/index.vue'),
    meta: {
        title: '一级菜单3'
    },
    redirect:'/continue_teach/test3/test3-1',
    children:[
        {
            path: 'test3-1',
            component: () => import('../project4/test3/test3-1.vue'),
            meta: {
                title: '二级菜单3-1'
            }
        },
        {
            path: 'test3-2',
            component: () => import('../project4/test3/test3-2.vue'),
            meta: {
                title: '二级菜单3-2'
            }
        },
    ]
},
],
},
{
    path: '/graduate_student',
    component: () => import('../project2/test1/index.vue'),
    meta: {
        title: '项目六'
    },
    redirect:'/graduate_student/test1/test1-1',     // 该配置是若点击选择一级菜单时，默认选中并跳转到该一级菜单下的第一个二级菜单
children:[
{
    path: '/graduate_student/test1',
    component: () => import('../project2/test1/index.vue'),
    meta: {
        title: '一级菜单1'
    },
    redirect:'/graduate_student/test1/test1-1',     // 该配置是若点击选择一级菜单时，默认选中并跳转到该一级菜单下的第一个二级菜单
        children:[
            {
                path: 'test1-1',
                component: () => import('../project2/test1/test1-1.vue'),
                meta: {
                    title: '二级菜单1-1'
                },
            },
            {
                path: 'test1-2',
                component: () => import('../project2/test1/test1-2.vue'),
                meta: {
                    title: '二级菜单1-2'
                },
            },
            {
                path: 'test1-3',
                component: () => import('../project2/test1/test1-3.vue'),
                meta: {
                    title: '二级菜单1-3'
                },
            },
            {
                path: 'test1-4',
                component: () => import('../project2/test1/test1-4.vue'),
                meta: {
                    title: '二级菜单1-4'
                },
            },
            {
                path: 'test1-5',
                component: () => import('../project2/test1/test1-5.vue'),
                meta: {
                    title: '二级菜单1-5'
                },
            }
        ]
},
{
    path: '/graduate_student/test2',
    component: () => import('../project1/test2/index.vue'),
    meta: {
        title: '一级菜单2'
    },
    redirect:'/graduate_student/test2/test2-1',     // 该配置是若点击选择父目录时，默认选中该父目录下的子路径页面
        children:[
            {
                path: 'test2-1',
                component: () => import('../project1/test2/test2-1.vue'),
                meta: {
                    title: '二级菜单2-1'
                },
            },
            {
                path: 'test2-2',
                component: () => import('../project1/test2/test2-2.vue'),
                meta: {
                    title: '二级菜单2-2'
                },
            },
            {
                path: 'test2-3',
                component: () => import('../project1/test2/test2-3.vue'),
                meta: {
                    title: '二级菜单2-3'
                },
            },
        ]
},
{
    path: '/graduate_student/test3',
    component: () => import('../project1/test3/index.vue'),
    meta: {
        title: '一级菜单3'
    },
    redirect:'/graduate_student/test3/test3-1',
    children:[
        {
            path: 'test3-1',
            component: () => import('../project1/test3/test3-1.vue'),
            meta: {
                title: '二级菜单3-1'
            }
        },
        {
            path: 'test3-2',
            component: () => import('../project1/test3/test3-2.vue'),
            meta: {
                title: '二级菜单3-2'
            }
        },
    ]
},
],
},
        
                {
                    // 国际化组件
                    path: '/i18n',
                    component: () => import('../components/common/I18n.vue'),
                    meta: {
                        title: '国际化'
                    }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: () => import('../page/Permission.vue'),
                    meta: {
                        title: '权限测试',
                        permission: true
                    }
                },
                {
                    path: '/404',
                    component: () => import('../page/404.vue'),
                    meta: {
                        title: '404'
                    }
                },
                {
                    path: '/403',
                    component: () => import('../page/403.vue'),
                    meta: {
                        title: '403'
                    }
                },
            ]
        },
        {
            // 登录页面
            path: '/login',
            component: () => import('../page/Login.vue'),
            meta: {
                title: '登录'
            }
        },
        // {
        //     path: '*',
        //     redirect: '/404'
        // }
    ]
});