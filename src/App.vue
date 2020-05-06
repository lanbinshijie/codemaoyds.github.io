<template>
  <div id="app">
    <div id="loading">
      <div class="l"></div>
      <div class="l l2"></div>
      <div class="l l3"></div>
    </div>
    <div class="nav">
      <div style="width:90%;display:inline-block">
        <router-link to="/">
          <img src="https://static.codemao.cn/community/shequ_logo.png" class="logo" alt="logo" />
        </router-link>
        <ul class="nav_ul">
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <li>
            <router-link to="/works">作品</router-link>
          </li>
          <li>
            <router-link to="/forum">论坛</router-link>
          </li>
          <li>
            <router-link to="/about">关于我们</router-link>
          </li>
        </ul>
      </div>
    </div>
    <br />
    <router-view class="content"></router-view>
  </div>
</template>
<style>
* {
  padding: 0;
  margin: 0;
}
*::-webkit-scrollbar {
  width: 10px;
  background: #00000000;
}
*::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #ffffff55;
}
*::-webkit-scrollbar-thumb:hover {
  background: #ffffffee;
}
ul,
ol {
  list-style: none;
}
a {
  text-decoration: none;
}
body {
  background: #1280ff;
}
#loading {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 99999999999999;
  background: #1280ff;
  text-align: center;
}

#loading .l {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #ffffff;
  display: inline-block;
  margin-top: 200px;
  margin-left: 10px;
  animation: loading 1s infinite ease-in-out;
}
#loading .l2 {
  animation-delay: -0.9s;
}
#loading .l3 {
  animation-delay: -0.8s;
}
@keyframes loading {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(30px);
  }
}
@keyframes navshow {
  0% {
    top: -200px;
  }
  100% {
    top: 0;
  }
}

.content {
  margin: 50px auto;
}
.nav {
  z-index: 9999999;
  position: fixed;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #1280ff;
  text-align: center;
  animation: navshow 0.5s ease-out;
}
.nav .logo {
  float: left;
  height: 20px;
  margin: 15px;
}
.nav .nav_ul {
  float: left;
}
.nav .nav_ul li {
  float: left;
  opacity: 0.7;
  transition: 0.3s;
}
.nav .nav_ul .this {
  opacity: 1;
  position: relative;
}
.nav .nav_ul .this::before {
  content: "";
  width: 20%;
  position: absolute;
  bottom: 8px;
  height: 5px;
  margin-left: 40%;
  background: #fff;
  border-radius: 5px;
}
.nav .nav_ul li a {
  color: #fff;
  height: 50px;
  padding: 0 10px;
  display: inline-block;
}
.nav .nav_ul li a {
  color: #fff;
  height: 50px;
  padding: 0 15px;
  display: inline-block;
}
.nav .nav_ul li:hover {
  opacity: 1;
}
</style>
<script>
export default {
  name: "app",
  components: {},
};
</script>

