<template>
  <div class="recommend">
    <div class="recommend-list" v-for="item in recommend" :key="item.link">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recommend',
  props: {
    recommend: Array
  }
}

</script>
<style scoped>
  .recommend {
    display: flex;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eeeeee;
  }
  .recommend-list {
    flex: 1;
    font-size: 14px;
    text-align: center;
  }
  .recommend-list img {
    width: 70px;
    height: 70px;
  }
  .recommend-list p {
    margin-top: 7px;
  }
</style>