<template>
  <div class="setting-container">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <!-- 面包屑 -->
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>个人设置</el-breadcrumb-item>
          </el-breadcrumb>
          <!-- 面包屑 -->
        </div>
      </template>
      <!-- 个人资料 -->

      <el-row>
        <el-col :span="11">
          <el-form
            :model="user"
            ref="form"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="用户编号"
              >110
              <!-- {{ user.id }} -->
            </el-form-item>
            <el-form-item label="手机号码">
              {{ user.phone }}
            </el-form-item>
            <el-form-item label="用户名">
              <el-input v-model="user.username"></el-input>
            </el-form-item>
            <el-form-item label="自我介绍">
              <el-input type="textarea" v-model="user.intro"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input v-model="user.email"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                :loading="onUpdateProfileLoading"
                @click="onUpdateUser"
                >保存设置</el-button
              >
            </el-form-item>
          </el-form>
        </el-col>
        <!-- 头像 -->
        <el-col :offset="3" :span="4">
          <label for="file">
            <el-avatar
              shape="square"
              :size="200"
              fit="cover"
              src="https://images.unsplash.com/photo-1441034281545-78296c3a6934?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            ></el-avatar>
            点击修改图片</label
          >
          <input
            type="file"
            id="file"
            hidden
            ref="file"
            @change="onFileChange"
          />
        </el-col>
      </el-row>
    </el-card>
    <!-- 头像弹框 -->
    <el-dialog
      title="修改头像"
      v-model="dialogVisible"
      append-to-body
      :before-close="handleClose"
      @opened="onDialogOpened"
      @closed="onDialogClose"
    >
      <div class="preview-img-wrap">
        <img :src="previewImg" class="preview-img" ref="preview-img" />
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button
            type="primary"
            @click="onUpdataImg"
            :loading="onUpdataImgLoading"
            >确 定</el-button
          >
        </span>
      </template>
    </el-dialog>
    <!-- 头像弹框 -->
  </div>
</template>
<script>
//import { getUserProfile,updateUserPhoto,updateUserProfile } from '@/api/user.js'
import "cropperjs/dist/cropper.css";
import Cropper from "cropperjs";

export default {
  name: "SettingIndex",
  data() {
    return {
      //头像弹框
      dialogVisible: false,
      //图片剪裁预览显示
      previewImg: "",
      //裁切器示例
      cropper: null,
      //更新用户头像loading状态
      onUpdataImgLoading: false,
      //更新用户资料loading状态
      onUpdateProfileLoading: false,
      //用户资料
      user: {
        id: null,
        phone: "1121212111",
        username: "nyy",
        intro: "哈哈一笑",
        email: "nongyanyu729@163.com",
        photo:
          "https://images.unsplash.com/photo-1441034281545-78296c3a6934?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
    };
  },
  // created: {
  //   //this.loadUser()
  // },
  methods: {
    //获取用户信息
    // loadUser() {
    //   getUserProfile().then(res => {
    //     this.user = res.data.data
    //   })
    // },
    //更新用户信息
    onUpdateUser() {
      //console.log('submit')
      //表单验验证
      //验证通过，提交表单
      //开启loading状态
      // this.onUpdateProfileLoading = true
      // const { name, intro, email } = this.user
      // updateUserProfile({
      //   name,
      //   intro,
      //   email,
      // }).then((res) => {
      //   //console.log(res)
      //   this.$message({
      //     type: "success",
      //     message: "更新个人资料成功！",
      //   });
      //   //关闭loading
      //   this.onUpdataProfileLoading = false
      // });
    },
    //头像change事件
    onFileChange() {
      //图片预览
      const file = this.$refs.file;
      const blobData = window.URL.createObjectURL(file.files[0]);
      //console.log(blobData)
      this.previewImg = blobData;
      //头像剪裁对话框
      this.dialogVisible = true;

      //解决相同文件不触发change事件
      this.$ref.file.value = "";
    },
    onDialogOpened() {
      //图片裁剪必须基于img进行初始化
      //img要可见状态才能正常初始化，所以要在对话框里面初始化裁剪，要在对话框完全打开的状态下进行初始化
      //获取图片dom结点
      const image = this.$refs["preview-img"];
      //第一次初始化，裁切图片发生变化，裁切不会默认更新
      //预览图片更新
      //方式一：replace
      // if(this.cropper) {
      //   this.cropper.replace(this.previewImg)
      //   return
      // }
      //初始化剪裁器
      this.cropper = new Cropper(image, {
        //裁切器比例
        aspectRatio: 1,
        viewMode: 1,
        dragMode: "none",
        background: false,
        cropBoxResizable: false,
        //移动裁切器的时候会触发调用crop方法
        // crop(event) {
        //   console.log(event.detail.x);
        //   console.log(event.detail.y);
        //   console.log(event.detail.width);
        //   console.log(event.detail.height);
        //   console.log(event.detail.rotate);
        //   console.log(event.detail.scaleX);
        //   console.log(event.detail.scaleY);
        // },
      });
    },
    //方式二：销毁裁切，重新初始化
    onDialogClose() {
      //对话框关闭，销毁裁切器
      this.cropper.destroy();
    },
    onUpdataImg() {
      //确定按钮开启loading
      //onUpdataImgLoading = true
      // //获取裁切的对象
      // this.cropper.getCroppedCanvas().toBlob(file => {
      //   const fd = new FormData();
      //   fd.append("字段名", file);
      //   //更新用户头像，提交fd
      //   updateUserPhoto(fd).then((res) => {
      //     //关闭对话框
      //     this.dialogVisible = false;
      //     //将剪切结果转为blob数据本地预览
      //     this.user.photo = window.URL.createObjURL(file)
      //     //服务端返回图片，比较慢
      //     this.user.photo = res.data.data
      //     //关闭确定按钮的loading
      //     this.onUpdataImgLoading = false
      //    更新头像提示
      //    this.$message({
      //     type: 'success',
      //     message: '更新头像成功'
      //    })
      //     //console.log(res);
      //   });
      // });
      //关闭对话框
      this.dialogVisible = false;
    },
    //头像弹框
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
  },
};
</script>
<style scoped lang="less">
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item {
  margin-bottom: 18px;
}
.preview-img-wrap {
  .preview-img {
    display: block;
    max-width: 100%;
  }
}
</style>
