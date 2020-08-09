<template>
  <div class='detail-services'>
    <div v-for="item in services" :key="item.name">
      <img :src="item.icon" alt="">
      <span>{{item.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailservices',
  props: {
    services: {
      type: Array
    }
  }
}

</script>
<style scoped>
  .detail-services {
    border-bottom: 4px solid rgba(233, 235, 236, .7);
    padding: 20px 3px;
    display: flex;
    font-size: 14px;
    justify-content: center;
  }
  .detail-services img {
    width: 15px;
    height: 15px;
    vertical-align: bottom;
  }

</style>