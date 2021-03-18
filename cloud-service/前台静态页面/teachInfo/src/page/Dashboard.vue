<template>
  <div>
      <div>
          <el-row :gutter="24">
  <el-col :span="5"><div style="background-color:#F2F2F2" class="grid-content bg-purple">
      <div>
          <div id="parents">
          <div class="parents_title">
              <span>这是一个标题</span>
              <span>1212</span>
              <img src="" alt="">
          </div>
          <div class="parents_title">
              <span>这是一个标题</span>
              <span>1212</span>
              <img src="" alt="">
          </div>
          <div class="parents_title">
              <span>这是一个标题</span>
              <span>1212</span>
              <img src="" alt="">
          </div>
</div>
      </div>
      </div></el-col>
  <el-col :span="14"><div class="grid-content bg-purple">
      <img class="" src="../assets/img/jxpt.png" alt="">
      </div></el-col>
  <el-col :span="5"><div class="grid-content bg-purple">
      <div id="parent">
          <div>住院医师管理系统</div>
          <div>实习生管理系统</div>
          <div>进修生管理系统</div>
          <div>研究生管理系统</div>
</div>
      </div></el-col>
</el-row>
      </div>

      <el-card style="margin-top:30px;">
          <div slot="header">
            <span class="clearfix">效果总览</span>
            <Form ref="searchForm" :model="searchForm" inline class="search-form-2">
              <el-row :gutter="50">
                <el-col :span="6">
                <FormItem prop="mediaAccount">
                    <span>媒体账号</span>
                    <el-select v-model="searchForm.mediaAccount" filterable placeholder="请选择媒体账号">
                      <el-option value="全部媒体账号">全部媒体账号</el-option>
                      <el-option v-for="i in mediaAccountList" :value="i" :key="i">{{i}}</el-option>
                    </el-select>
                </FormItem>
                </el-col>

                <el-col :span="6">
                <FormItem prop="application">
                    <span>应用</span>
                    <el-select v-model="searchForm.application" filterable placeholder="请选择应用">
                      <el-option v-for="i in applicationList" :value="i" :key="i">{{i}}</el-option>
                    </el-select>
                </FormItem>
                </el-col>

                <el-col :span="6">
                <FormItem prop="mediaType">
                    <span>媒体</span>
                    <el-select v-model="searchForm.mediaType" filterable placeholder="请选择媒体">
                      <el-option v-for="i in mediaTypeList" :value="i" :key="i">{{i}}</el-option>
                    </el-select>
                </FormItem>
                </el-col>

                <el-col :span="6">
                <FormItem prop="date2">
                    <span>日期</span>
                    <el-select v-model="searchForm.date2" filterable placeholder="请选择日期">
                      <el-option v-for="i in dateSelectList" :value="i" :key="i">{{i}}</el-option>
                    </el-select>
                </FormItem>
                </el-col>
            </el-row>
            </Form>
        </div>
        <div>
            <LineECharts></LineECharts>
        </div>
      </el-card>

      <el-row :gutter="20">
        <el-col :span="12">
        <el-card style="margin-top:30px;">
            <div slot="header">
                <span class="clearfix">TOP广告</span>

                <Form ref="searchFormTop" :model="searchFormTop" inline class="search-form-2">
                <el-row :gutter="10">
                    <el-col :span="8">
                    <FormItem prop="applicationTop">
                        <el-select v-model="searchFormTop.applicationTop" filterable placeholder="请选择应用">
                        <el-option value="全部应用">全部应用</el-option>  
                        <el-option v-for="i in applicationList" :value="i" :key="i">{{i}}</el-option>
                        </el-select>
                    </FormItem>
                    </el-col>

                    <el-col :span="8">
                    <FormItem prop="mediaTypeTop">
                        <el-select v-model="searchFormTop.mediaTypeTop" filterable placeholder="请选择媒体">
                        <el-option v-for="i in mediaTypeList" :value="i" :key="i">{{i}}</el-option>
                        </el-select>
                    </FormItem>
                    </el-col>

                    <el-col :span="8">
                    <FormItem prop="dateTop">
                        <el-select v-model="searchFormTop.dateTop" filterable placeholder="请选择日期">
                        <el-option v-for="i in dateSelectList" :value="i" :key="i">{{i}}</el-option>
                        </el-select>
                    </FormItem>
                    </el-col>
                </el-row>
                </Form>
            </div>
            <div>
                <Grid api="" 
                @currentPage="currentPage"
                @pageSize="pageSize"
                :event-bus="searchEventBus" 
                :search-params="searchFormTop">
                <Table
                    height="300"
                    slot="table"
                    slot-scope="{loading, data}"
                    :loading="loading"
                    border
                    :columns="columnTopAd"
                    :data="data"
                    sortable="custom"
                    @on-sort-change="changeSort"
                    @on-selection-change="selectionChange"
                ></Table>
                </Grid>
                <div slot="footer" style="float:right;margin:10px 10px;">
                    <el-button type="text" size="20">查看详情<i class="el-icon-d-arrow-right"></i></el-button>
                </div>
            </div>
        </el-card>
        </el-col>

        <el-col :span="12">
        <el-card style="margin-top:30px;">
            <div slot="header">
                <span class="clearfix">TOP创意</span>
                <Form ref="searchFormTop" :model="searchFormTop" inline class="search-form-2">
                <el-row :gutter="10">
                    <el-col :span="8">
                    <FormItem prop="applicationTop2">
                        <el-select v-model="searchFormTop.applicationTop2" filterable placeholder="请选择应用">
                        <el-option value="全部应用">全部应用</el-option>  
                        <el-option v-for="i in applicationList" :value="i" :key="i">{{i}}</el-option>
                        </el-select>
                    </FormItem>
                    </el-col>

                    <el-col :span="8">
                    <FormItem prop="mediaTypeTop2">
                        <el-select v-model="searchFormTop.mediaTypeTop2" filterable placeholder="请选择媒体">
                        <el-option v-for="i in mediaTypeList" :value="i" :key="i">{{i}}</el-option>
                        </el-select>
                    </FormItem>
                    </el-col>

                    <el-col :span="8">
                    <FormItem prop="dateTop2">
                        <el-select v-model="searchFormTop.dateTop2" filterable placeholder="请选择日期">
                        <el-option v-for="i in dateSelectList" :value="i" :key="i">{{i}}</el-option>
                        </el-select>
                    </FormItem>
                    </el-col>
                </el-row>
                </Form>
            </div>
            <div>
                <Grid api="" 
                @currentPage="currentPage"
                @pageSize="pageSize"
                :event-bus="searchEventBus" 
                :search-params="searchFormTop">
                <Table
                    height="300"
                    slot="table"
                    slot-scope="{loading, data}"
                    :loading="loading"
                    border
                    :columns="columnTopIdea"
                    :data="data"
                    sortable="custom"
                    @on-sort-change="changeSort"
                    @on-selection-change="selectionChange"
                ></Table>
                </Grid>
                <div class="blankContent">
                </div>
            </div>
        </el-card>
        </el-col>
      </el-row>

</div>
</template>

<script>
import Vue from 'vue';
import { fetchData } from '../api/index';
import _ from "lodash";
import Grid from '../components/common/Grid';
import LineECharts from '@/components/dashboard/LineECharts';
export default {
    name: 'dashboard',
    destroyed() {
        this.searchEventBus.$off();
    },
    data() {
        this.searchEventBus = new Vue();
        return {
            name: localStorage.getItem('ms_username'),
            collapse: false,
            dateSelectList: ['今天','昨天','过去7天','过去30天','本周','上周','本月','上月'],     // 可选日期列表
            mediaAccountList: ['媒体账号1','媒体账号2','媒体账号3','媒体账号4'],    // 媒体账号列表
            applicationList: ['应用1','应用2','应用3','应用4','应用5'],    // 应用列表
            mediaTypeList: ['今日头条','广点通','快手'],     // 媒体类型列表
            
            searchForm:{     // 今日头条和效果总览的查询参数
                date: "",
                date2: "",
                mediaAccount: "",
                application: "",
                mediaType: ""
            },
            searchFormTop:{    // TOP广告和TOP创意的查询参数
                applicationTop: "",    // TOP广告
                mediaTypeTop: "",
                dateTop: "",
                applicationTop2: "",   // TOP创意
                mediaTypeTop2: "",
                dateTop2: "",
            },
            columnTopAd: [    // TOP广告的数据表格
            {
                title: "计划名称",
                key: "planName",
                minWidth: 220,
                tooltip: true
            },
            {
                title: "消耗",
                key: "expend",
                tooltip: true,
                minWidth: 100,
            },
            {
                title: "消耗变化率",
                key: "expendRate",
                minWidth: 100,
                tooltip: true,
            },
            {
                title: "转化数",
                key: "TransformNumber",
                minWidth: 100,
                tooltip: true,
            },
            {
                title: "转化率",
                key: "TransformRate",
                minWidth: 100,
                tooltip: true,
            },
        ],
        columnTopIdea:[    // TOP创意的数据表格

        ],
        };
    },
    components: {
        Vue,
        Grid,
        LineECharts
    },
    created() {
        
    },
    computed: {
        role() {
            return this.name === 'admin' ? '超级管理员' : '普通用户';
        }
    },
    methods: {
        //获取页码及每页条数
        currentPage(val){
        this.current = val;
        },
        pageSize(val){
        this.pageNum = val;
        },
        changeSort() {},
        selectionChange() {},
        changeDate() {
            const now = new Date().getTime();
            this.data.forEach((item, index) => {
                const date = new Date(now - (6 - index) * 86400000);
                item.name = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
            });
        },
        setColor(dataVal){
            if(dataVal > 0){
                return 'overview-list-trend-up';
            }else{
                return 'overview-list-trend-down';
            }
        }
    }
};
</script>


<style scoped>
.el-row {
    margin-bottom: 20px;
}

/* 卡片标题字体的样式 */
.clearfix{
    padding-left: 5px;
    font-size: 22px;
    font-weight: 800;
}
/* 四个彩色卡片的相关样式 */
.colorCardsBody{
    padding: 18px 40px;
}
.colorCardsBody span{
    font-size: 16px;
    color: #515a6e;
}
.colorCardsBody p{
    font-family: Roboto-Medium !important;
    padding-top: 15px;
    font-size: 18px;
    font-weight: 800;
}
/* 数据总览区域的整体样式设置 */
.dataOverview{
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
/* 数据总览里的每一条信息项 */
.overview-list-item {
    padding: 0 25px;
    border-left: 1px solid rgba(220,222,226,.5);
    flex: 1;
}
.overview-list-item:first-child {
    border: none;
}
/* 数据总览里每条信息项的文本部分 */
.overview-list-text {
    color: #515a6e;
    font-size: 14px;
    margin-bottom: 24px;
}
.overview-list-count {
    color: #17233d;
    font-weight: 700;
    margin-bottom: 16px;
    font-size: 16px;
}
.overview-list-trend-up {
    font-size: 14px;
    color: blue;
}
.overview-list-trend-down {
    font-size: 14px;
    color: red;
}
.programmaticBatchBtn{    /* 程序化批量的按钮样式 */
    float: right;
    padding: 4px 11px 3px 11px;
    margin-left: 20px;
    margin-right: 50px;
    font-size: 14px;
    color: rgb(255, 255, 255);
    background-color: rgb(0, 182, 151);
}
.programmaticBatchBtn img{     /* 程序化批量按钮上的动图标 */
    width: 24px;
    display: inline-block;
    vertical-align: middle;    /* 让该图标在 Y 轴上居中 */
}
.search-form{      /* 日期筛选控件的样式 */
    display: inline;
    margin-left: 20px;
    margin-right: 8px;
    float: right;
}
.search-form span,.search-form-2 span{    /* 筛选控件的前面字体样式 */
    margin-right: 10px;
    font-weight: 700;
}
.search-form-2{      /* “效果总览” 卡片里的筛选控件定位设置 */
    margin-top:30px;
    margin-bottom: -40px;
    margin-left: 30px;
}
.blankContent{    /* TOP 创意卡片底部空白部分，为了和 TOP 广告底部对齐 */
    width: auto;
    height: 40px;
}
/* 首页上部分 */
 .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #fff;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 356px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
   #parent{
            background-color: #fff;
            display: flex;
            height: 100%;
            flex-direction: column;
        }
        /* #parent>div{
            flex: 1 1 auto;
        } */
        #parent>div:nth-child(1){
            height: 66px;
            width: 294px;
            font-size: 18px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            line-height: 24px;
            color: #4381FF;
            background-color: #fff;
            margin-top: 16px;
            margin-left: 15px;
            text-align: center;
           line-height: 66px;
        }
        #parent>div:nth-child(2){
            height: 66px;
            width: 294px;
            font-size: 18px;
            font-family: Microsoft YaHei;
           font-weight: bold;
           line-height: 24px;
           color: #707070;
           background-color: #fff;
           margin-top: 20px;
           margin-left: 15px;
           text-align: center;
           line-height: 66px;
           text-align: center;
           line-height: 66px;
        }
        #parent>div:nth-child(3){
            height: 66px;
            width: 294px;
            font-size: 18px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            line-height: 24px;
            color: #707070;
            background-color: #fff;
            margin-top: 20px;
            margin-left: 15px;
            text-align: center;
            line-height: 66px;
        }
        #parent>div:nth-child(4){
            height: 66px;
            width: 294px;
            font-size: 18px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            line-height: 24px;
            color: #707070;
            background-color: #fff;
            margin-top: 20px;
            margin-left: 15px;
            text-align: center;
            line-height: 66px;
        }
        #parents{
            background-color: #f2f2f2;
            display: flex;
            height: 100%;
            flex-direction: column;
        }
        #parents>div:nth-child(1){
            height: 108px;
            background-color: #fff;
            border-radius: 4px;
        }
        #parents>div:nth-child(2){
            height: 108px;
            margin-top: 16px;
           background-color: #fff;
           border-radius: 4px;
        }
        #parents>div:nth-child(3){
            height: 108px;
            margin-top: 16px;
            background-color: #fff;
            border-radius: 4px;
        }  
        .parents_title{
            position: relative;
        }
        .parents_title>span:nth-child(1){
           position: absolute;
            top: 22px;
            left: 30px;
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            line-height: 19px;
            color: #748AA1;
        }
        .parents_title>span:nth-child(2){
           position: absolute;
            top: 55px;
            left: 30px;
            font-size: 24px;
            font-family: OPPOSans;
            font-weight: 400;
            line-height: 32px;
            color: #0D1333;
        }
</style>
