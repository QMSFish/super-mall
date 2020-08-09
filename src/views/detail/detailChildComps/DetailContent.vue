<template>
  <div class='detail-content' v-if="goodContent">
    <p class="desc">{{goodContent.title}}</p>
    <div class="content-center">
      <span class="price">￥{{goodContent.price}}</span>
      <span class="oldPrice">{{goodContent.lowPrice}}</span>
      <span class="discount" v-if="goodContent.discount">{{goodContent.discount}}</span>
    </div>
    <p class="columns">
      <span v-for="item in goodContent.columns" :key="item">{{item}}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'detailcontent',
  props: {
    goodContent: {
      type: Object
    }
  }
}

</script>
<style scoped>
  .detail-content {
    padding: 10px 3px 6px;
    border-bottom: 4px solid rgba(233, 235, 236, .7);
  }
  .desc {
    font-size: 19px;
    font-weight: 700;
    margin-bottom: 16px;
  }
  .content-center {
    position: relative;
    padding-bottom: 20px;
  }
  .content-center span {
    margin-right: 5px;
  }
  .price {
    font-size: 22px;
    color: var(--color-tint);
  }
  .oldPrice {
    font-size: 10px;
    text-decoration: line-through;
  }
  .discount {
    position: absolute;
    left: 135px;
    top: -5px;
    height: 22px;
    
    color: #ffff;
    font-size: 14px;
    background-color: var(--color-high-text);
    padding: 4px;
    border-radius: 11px;
  }
  .columns {
    font-size: 14px;
    text-align: center;
    
  }
  .columns span:nth-child(1) {
    float: left;
  }
  .columns span:nth-child(3) {
    float: right;
  }
  
</style>