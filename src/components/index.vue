<template>
  <div>
    <div style="width:960px;margin:auto">
      <div class="works" v-for="(work,index) in works" :key="index">
        <a :href="'/works/'+work.id">
          <div class="work_item">
            <div class="work_img_wrap">
              <span class="work_img" :style="'background-image:url('+work.preview+');'"></span>
              <span></span>
            </div>
            <div class="work_detail">
              <h5 class="work_name">{{work.name}}</h5>
              <ul class="datas">
                <li>
                  <span class="icon icon_view"></span>
                  <span class="num">{{work.view_times}}</span>
                </li>
                <li>
                  <span class="icon icon_prise"></span>
                  <span class="num">{{work.praise_times}}</span>
                </li>
              </ul>
              <div class="line"></div>
              <p class="author">
                <img :src="work.user.avatar_url" class="author_head" />
                <a target="_blank" :href="'/user/'+work.user.id">{{work.user.nickname}}</a>
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<style>
.works {
  margin: 10px 20px 20px 0;
  display: inline-block;
  transition: 0.3s ease-out;
}
.work_item {
  position: relative;
  height: 308px;
  width: 220px;
  cursor: pointer;
  background: #fff;
  border-radius: 4px;
  display: block;
  overflow: hidden;
  -webkit-mask-image: -webkit-radial-gradient(#fff, #000);
}
.works:hover {
  box-shadow: 0 0 30px #666;
  margin-top: 0;
}

.work_item .work_img_wrap {
  width: 100%;
  height: 190px;
  overflow: hidden;
  margin-bottom: 10px;
  position: relative;
}
.work_item .work_img {
  display: inline-block;
  width: 100%;
  height: 190px;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: 50%;
}
.work_item .work_detail {
  width: 100%;
  padding: 0 10px 10px;
}
.work_item .work_name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  color: #333;
  line-height: 22px;
  margin-bottom: 12px;
  font-weight: inherit;
  width: 90%;
}
.work_item .work_detail .datas {
  margin-bottom: 22px;
  line-height: 14px;
}
.work_item .line {
  width: 100%;
  position: absolute;
  width: 220px;
  height: 1px;
  background: #f3f3f3;
  bottom: 43px;
  left: 0;
}
.work_item .author {
  font-size: 12px;
  line-height: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #666;
  display: inline-block;
}
.work_item .author .author_head {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 8px;
  background-color: #c1e2fb;
}
.work_item .author a {
  vertical-align: sub;
  color: #777;
}
.work_item .author a:hover {
  color: rgb(75, 183, 255);
}
.work_item .work_detail .icon_view {
  display: inline-block;
  background: url(https://static.codemao.cn/community_frontend/asset/icon_sprite_1fd27.svg)
    no-repeat -82px -3px;
  width: 18px;
  height: 18px;
  margin-right: 4px;
  vertical-align: middle;
}
.work_item .work_detail .datas li {
  display: inline-block;
  margin-right: 16px;
}
.work_item .work_detail .icon_prise {
  display: inline-block;
  margin-right: 4px;
  background: url(https://static.codemao.cn/community_frontend/asset/icon_sprite_1fd27.svg)
    no-repeat -2px -3px;
  width: 18px;
  height: 18px;
  vertical-align: middle;
}
.work_item .work_detail .num {
  font-size: 14px;
  color: #bdbdbd;
}
</style>
<script>
export default {
  computed: {
    works() {
      return this.$store.state.works;
    }
  }
};
</script>
