<template>
  <div class="article-container">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>图书管理</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 面包屑 -->
    <!-- 表单筛选 -->
    <el-form
      ref="form1"
      :model="form"
      label-width="80px"
      :label-position="labelPosition"
    >
      <el-form-item label="状态">
        <el-col :span="11">
          <el-radio-group v-model="form.resource">
            <el-radio label="全部"></el-radio>
            <el-radio label="在馆"></el-radio>
            <el-radio label="借出"></el-radio>
          </el-radio-group>
        </el-col>
      </el-form-item>
      <el-form-item label="类型">
        <el-col :span="11">
          <el-select v-model="form.region" placeholder="请选择类型">
            <el-option label="人文类" value="shanghai"></el-option>
            <el-option label="自然类" value="beijing"></el-option>
          </el-select>
        </el-col>
      </el-form-item>
      <el-form-item label="时间">
        <el-col :span="11">
          <el-date-picker
            v-model="form.date1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-col :span="11">
          <el-button type="primary" @click="onSubmit">筛选</el-button>
        </el-col>
      </el-form-item>
    </el-form>
    <!-- 表单筛选 -->
    <!-- 表格 -->
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="入馆日期"> </el-table-column>
      <el-table-column prop="cover" label="书籍封面">
        <el-image
          style="width: 100px; height: 100px"
          :src="src"
          :preview-src-list="srcList"
        ></el-image>
      </el-table-column>
      <el-table-column prop="title" label="书名"> </el-table-column>
      <el-table-column prop="author" label="作者"> </el-table-column>
      <el-table-column prop="publish" label="出版社"> </el-table-column>
      <el-table-column prop="code" label="馆藏编码"> </el-table-column>
      <el-table-column prop="address" label="馆藏地址"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="240">
        <template #default="scope">
          <el-button @click="handleClick(scope.row)" plain size="small"
            >查看</el-button
          >
          <el-button type="primary" plain size="small">编辑</el-button>
          <el-button
            @click.prevent="deleteRow(scope.$index, tableData)"
            type="danger"
            plain
            size="small"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 表格 -->
    <!-- 分页 -->
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      v-model:currentPage="currentPage1"
      :page-size="100"
      layout="total, prev, pager, next, jumper"
      :total="1000"
    >
    </el-pagination>
    <!-- 分页 -->
  </div>
</template>
<script>
export default {
  name: "ArticleIndex",
  data() {
    return {
      labelPosition: "right",
      value2: "",
      src: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
      srcList: [
         "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
        ],
      //表单筛选
      form: {
        name: "",
        region: "",
        date1: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      //表格数据
      tableData: [
        {
          date: "2016-05-02",
          cover: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          title: "计算机导论",
          author: "nyy",
          publish: "广西师范大学出版社",
          code: "I12322",
          address: "A馆11号书架",
        },
        {
          date: "2016-05-02",
          cover: "",
          title: "计算机导论",
          author: "nyy",
          publish: "广西师范大学出版社",
          code: "I12322",
          address: "A馆11号书架",
        },
        {
          date: "2016-05-02",
          cover: "",
          title: "计算机导论",
          author: "nyy",
          publish: "广西师范大学出版社",
          code: "I12322",
          address: "A馆11号书架",
        },
        {
          date: "2016-05-02",
          cover: "",
          title: "计算机导论",
          author: "nyy",
          publish: "广西师范大学出版社",
          code: "I12322",
          address: "A馆11号书架",
        },
      ],
      // 分页
      currentPage1: 5,
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>
<style scoped lang="less">
</style>
