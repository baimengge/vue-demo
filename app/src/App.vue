<template>
  <div id="app">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <icon name="more" scale="3" style="color: #fff;"></icon>
          <h1>XiXiBai</h1>
          <ul class="menu">
            <router-link to="/">
              <div>
                <span>
                  <icon name="home" scale="5"></icon>
                </span>
                <p>home</p>
              </div>
            </router-link>
            <router-link to="/Article">
              <div>
                <span>
                  <icon name="article" scale="5"></icon>
                </span>
                <p>article</p>
              </div>
            </router-link>
            <router-link to="/demo">
              <div>
                <span>
                  <icon name="demo" scale="5"></icon>
                </span>
                <p>demo</p>
              </div>
            </router-link>
          </ul>
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
#app .menu{
  background-color: #fff;
  text-align: center;
  margin: 10px 200px;
  padding: 10px 10px;
  margin-bottom: 1px;
  box-shadow: 0 3px 5px #000;
  height: 73px;
}
#app .menu a{
  text-decoration: none;
  float:left;
  width: 33%;
}
#app .menu a p{
  margin: 0;
}
</style>
