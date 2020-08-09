<template>
  <div class='detailcomment'>
    <div class="top">
      <span>用户评价</span>
      <a href="#">更多</a>
    </div>
    <div class="bottom" v-if="comment.list">
      <div class="user">
        <img :src="getcomment.user.avatar" alt="">
        <span>{{getcomment.user.uname}}</span>
      </div>
      <p class="content">{{getcomment.content}}</p>
      <div class="style">
        <span class="time">{{gettime}}</span>
        <span>{{getcomment.style}}</span>
      </div>
      <div v-if="getcomment.images && (getcomment.images.length !== 0)" class="images">
        <img :src="item" alt="" v-for="item in getcomment.images" :key="item">
      </div>

    </div>
  </div>
</template>

<script>
import {transformTimer} from 'common/utils'
export default {
  name: 'detailcomment',
  props: {
    comment: Object
  },
  computed: {
    gettime() {
      return transformTimer(this.getcomment.created * 1000)
    },
    getcomment() {
      return this.comment.list[0]
    }
    // handleImg() {
    //   return this.comment.images? this.comment.images : ''
    // }
  }
}

</script>
<style scoped>
  .detailcomment {
    padding: 0 10px 20px;
    border-bottom: 4px solid rgba(233, 235, 236, .7);
  }
  .detailcomment .top {
    border-bottom: 2px solid #e6e6e6;
    padding: 12px 0;
    font-size: 16px;
  }
  .detailcomment .top a  {
    float: right;
  }
  .detailcomment .bottom {
    padding-top: 10px;
  }
  .bottom .user {
    /* margin-bottom: 10px; */
    font-size: 20px;
  }
  .bottom .user img {
    width: 38px;
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 19px

  }
  .bottom .content {
    padding: 10px 0;
  }
  .bottom .style {
    padding-bottom: 10px;

  }
  .bottom .style .time {
    padding-right: 8px;
  }
  .bottom .images img {
    width: 25%;
    margin-right: 2px;
  }
</style>