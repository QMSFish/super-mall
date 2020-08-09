<template>
  <div class='detail-display'>
    <p>{{displaydata.key}}</p>
    <img :src="item" alt="" v-for="item in displaydata.list" :key="item">
  </div>
</template>

<script>
export default {
  name: 'detaildisplay',
  props: {
    displaydata: Object
  }
}

</script>
<style scoped>
  .detail-display {
    padding-bottom: 15px;
    border-bottom: 4px solid rgba(233, 235, 236, .7);
  }
  .detail-display p {
    font-weight: 700;
    padding-left: 10px;
    margin-bottom: 10px;
  }
  .detail-display img {
    width: 100%;
  }
</style>