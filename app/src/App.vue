<template>
  <div id="app">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <icon name="more" scale="3" style="color: #fff;"></icon>
          <h1>XiXiBai</h1>
        </div>
      </el-col>
    </el-row>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#app{
  font-family: '微软雅黑';
}
.grid-content {
  border-radius: 4px;
  min-height: 200px;
}
.bg-purple-dark {
  background: #1ABC9C;
}
.bg-purple-dark h1{
  text-align: center;
  color:#fff;
  margin: 0;
  opacity:0.5;
  font-size: 28px;
}
#app svg{
  font-size:16px;
}

</style>
