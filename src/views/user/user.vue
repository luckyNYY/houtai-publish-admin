<template>
  <div class="article-container">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>读者管理</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 面包屑 -->
    <!-- 表单筛选 -->
    <el-form
      ref="form1"
      :model="form"
      label-width="80px"
      :label-position="labelPosition"
      class="form-containner"
    >
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
          <el-button type="primary" @click="onSubmit">筛选</el-button>
        </el-col>
      </el-form-item>
    </el-form>
    <!-- 表单筛选 -->
    <!-- 表格 -->
    <el-table :data="tableData" stripe style="width: 100%">
      <el-button>清除筛选</el-button>
      <el-table-column prop="date" label="注册日期" width="120"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="phone" label="电话号码" width="120"> </el-table-column>
      <el-table-column prop="idCard" label="身份证信息" width="190"> </el-table-column>
      <el-table-column prop="address" label="地址" width="240">
      </el-table-column>
      <el-table-column
        prop="tag"
        label="状态"
        :filters="[
          { text: '全部', value: '全部' },
          { text: '待审核', value: '审核失败' },
          { text: '审核成功', value: '审核成功' },
          { text: '审核失败', value: '审核失败' },
        ]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template #default="scope">
          <el-tag
            :type="scope.row.tag === '审核成功' ? 'primary' : 'success'"
            disable-transitions
            >{{ scope.row.tag }}</el-tag
          >
        </template>
      </el-table-column>
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
  name: "UserIndex",
  data() {
    return {
      labelPosition: "right",
      value2: "",
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
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          phone: "12321232121",
          idCard: "45111111111111111111",
          tag: "审核成功",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          phone: "12321232121",
          idCard: "45111111111111111111",
          tag: "待审核",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          phone: "12321232121",
          idCard: "45111111111111111111",
          tag: "审核失败",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          phone: "12321232121",
          idCard: "45111111111111111111",
          tag: "待审核",
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
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`)
      },
  },
};
</script>
<style scoped lang="less">
.form-containner {
  padding-top: 10px;
}
</style>
