<template>
  <div class='detail-shop' v-if="shopdata">
    <div>
      <img :src="shopdata.shopLogo" alt="">
      <span>{{shopdata.name}}</span>
    </div>
    <div class="shop-center">
      <div class="shop-sell">
        <p>{{getsell}}万</p>
        总销量
      </div>
      <div class="shop-good">
        <p>{{shopdata.cGoods}}</p>
        全部宝贝
      </div>
      <div class="shop-line"></div>
      <!-- <div class="shop-score">
        <p v-for="item in shopdata.score" :key="item.name">
          <span>{{item.name}}</span>
          <span :class="{textcolor: item.isBetter}" class="two">{{item.score}}</span>
          <span :class="{better: item.isBetter}">低</span>
        </p>
      </div> -->
      <table class="shop-score">
        <tr v-for="item in shopdata.score" :key="item.name">
          <td>{{item.name}}</td>
          <td :class="{textcolor: item.isBetter}" class="two">{{item.score}}</td>
          <td :class="{better: item.isBetter}" class="bottom">低</td>
        </tr>
      </table>
    </div>
    <div class="shop-bottom">
      <a :href="shopdata.shopUrl">
        <span class="In-shop">
          进店逛逛
        </span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailshop',
  props: {
    shopdata: {
      type: Object
    }
  },
  computed: {
    getsell() {
      return (this.shopdata.cSells / 10000).toFixed(1)
    }
  },
  methods: {
    // getamount(type) {
    //   return (this.shopdata[type] / 10000).toFixed(1)
    // }
  }
}

</script>
<style scoped>
  .detail-shop {
    padding: 20px 4px 30px;
    border-bottom: 4px solid rgba(233, 235, 236, .7); 
  }
  .detail-shop img {
    width: 60px;
    vertical-align: middle;
    margin-right: 10px;
  }
  .shop-center {
    box-sizing: border-box;
    position: relative;
    height: 66px;
    /* padding-bottom: 20px; */
    margin-bottom: 30px;
    font-size: 15px;
    
  }
  .shop-sell {
    position: absolute;
    top: 15px;
    left: 25px;
    text-align: center;
  }
  .shop-sell p {
    margin-bottom: 7px;
  }
  .shop-good {
    position: absolute;
    top: 15px;
    left: 100px;
    text-align: center;
  }
  .shop-good p {
    margin-bottom: 7px;
  }
  .shop-line {
    position: absolute;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 44px;
    background-color: #f4f4f4;
  }
  .shop-score {
    position: absolute;
    top: 0;
    right: 30px;
  }

  .shop-score tr td {
    padding: 0 3px 6px;
  }
  .two {
    color: #88a972;
  }
  .shop-score tr .textcolor {
    color: #ed6f61;
  }
  .bottom {
    background-color: #88a972;
  }
  .better {
    background-color: #ed6f61;
  }
  .shop-bottom {
    text-align: center;
  }
  .In-shop {
    padding: 5px 45px;
    font-weight: 700;
    background-color: #f1f4fa;

  }
</style>