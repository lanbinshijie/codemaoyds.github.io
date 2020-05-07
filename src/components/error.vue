<template>
  <div>
    <div class="error">
      <h1>404</h1>
      <p>呀……网页走丢了</p>
      <a href="/"><button>返回首页</button></a>
    </div>
  </div>
</template>
<style>
.error {
  text-align: center;
  width: 70%;
  margin: auto;
  color: #ffffff;
  padding: 80px 0;
}
h1 {
  font-size: 150px;
}
button {
  background: none;
  display: block;
  margin: 20px auto;
  border: none;
  outline: none;
  padding: 10px 15px;
  color: #fff;
  cursor: pointer;
  transition: 0.5s;
}
button:hover{
    border-radius: 20px;
    background: #00000033;
}
</style>
