<template>
  <div id="app">
    <!-- 字符串 -->
    <router-link to="/">go home</router-link>
    <!-- 对象 -->
    <router-link :to="{ name: 'Article' }">go obj</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
