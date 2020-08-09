<template>
  <div class='detail-toolbar'>
    <div class="tabitem-1">
      <div class="img1 img"></div>
      客服
    </div>
    <div class="tabitem-2">
      <div class="img2 img"></div>
      店铺
    </div>
    <div class="tabitem-3">
      <div class="img3 img"></div>
      收藏
    </div>
    <div class="tabitem-4" @click="addCart">加入购物车</div>
    <div class="tabitem-5">购买</div>
  </div>
</template>

<script>
export default {
  name: 'detailtoolbar',
  data() {
    return {
      flag: false
    }
  },
  props: {
    cart: Object
  },
  methods: {
    addCart() {
      // console.log(this.$bus);
      if(this.cart) {
        this.judge();
        this.$emit('addtocart');
      }
      
      // this.$bus.$emit('addToCart',this.cart)
      console.log(this.cart);
      // console.log(this.cart.iid);
      // this.$store.state.cart.push()
    },
    judge() {
      if(this.$store.state.cart.length == 0) {
        this.$store.commit('addcart',this.cart);
      } else {
        this.$store.state.cart.forEach((item,index) => {
          if(this.cart.iid == item.iid) {
            this.$store.commit('changenum',index);
            this.flag = true;
            return;
          } 
        });
        if(!this.flag) {
          this.$store.commit('addcart',this.cart);
        }
      }
      // console.log(this.$store.state.cart.length);
      // console.log(this.$store.state.cart.num);
    },
  }
}

</script>
<style scoped>
  .detail-toolbar {
    position: fixed;
    left: 0px;
    bottom: 0px;
    z-index: 9;
    width: 100%;
    height: 55px;
    display: flex;
    background-color: #f4f4f4;
    text-align: center;
  }
  .img1 {
    width: 22px;
    height: 20px;
    background: url("~assets/img/detail/detail_bottom.png") no-repeat 0 -53.5px ;
    background-size: 22px auto;
    margin: 0 auto;
  }
  .img2 {
    width: 22px;
    height: 20px;
    background: url("~assets/img/detail/detail_bottom.png") no-repeat 0 -100px ;
    background-size: 22px auto;
    margin: 0 auto;
  }
  .img3 {
    width: 22px;
    height: 20px;
    background: url("~assets/img/detail/detail_bottom.png") no-repeat 0 0 ;
    background-size: 22px auto;
    margin: 0 auto;
  } 
  .img {
    margin-bottom: 4px;
  }
  .tabitem-1,
  .tabitem-2,
  .tabitem-3 {
    flex: 1.6;
    padding-top: 6px;
  }
  .tabitem-4,
  .tabitem-5 {
    flex: 2.6;
  }
  .tabitem-4 {
    background-color: #fddb10;
    color: #333333;
    line-height: 49px;
  }
  .tabitem-5 {
    background-color: #fe799a;
    color: #fff;
    line-height: 49px;
  }
</style>