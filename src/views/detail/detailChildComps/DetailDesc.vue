<template>
  <div class='detail-desc'>
    <div class="desc-top">
      <div class="point-left"></div>
      <div class="line-left"></div>
    </div>
    <p>{{desc}}</p>
    <div class="desc-bottom">
      <div class="point-right"></div>
      <div class="line-right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detaildesc',
  props: {
    desc: String
  }
}

</script>
<style scoped>
  .detail-desc {
    padding: 20px 15px;
    font-size: 15px;
  }
  .desc-top {
    margin-bottom: 10px;
    position: relative;
  }
  .point-left {
    position: absolute;
    top: -7px;
    left: 0px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: #2a2c2e;
  }
  .line-left {
    width: 100px;
    height: 2px;
    background-color: #dadada;
    /* margin-top: 8px; */
  }
  .desc-bottom {
    margin-top: 10px;
    position: relative;
  }
  .point-right {
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: #2a2c2e;
    z-index: 1;
  }
  .line-right {
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 100px;
    height: 2px;
    background-color: #dadada;
  }
</style>