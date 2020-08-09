<template>
  <div v-if="cart && cart.length !== 0">
      <div v-for="(item,index) in cart" :key="index" class="cart-show">
        <cart-detailitem>
          <div class="circle" @click="getslect(index)" :class="{active: item.flag}"></div>
          <div>
            <img :src="item.img" alt="">
            <p class="title">{{item.title}}</p>
            <p class="desc">{{item.desc}}</p>
            <div>
              <span class="price">￥{{item.price}}</span>
              <span class="num">x{{item.num}}</span>
            </div>
          </div>
        </cart-detailitem>
      </div>
    </div>
</template>

<script>
import CartDetailitem from './CartDetailitem'
export default {
  name: 'cartdetail',
  props: {
    cart: Array,
  },
  components: {
    CartDetailitem
  },
  methods: {
    getslect(index) {
      this.$store.commit('reserveflag',index);
      this.$bus.$emit('checkall');
    }
  },
}

</script>
<style scoped>
  .cart-show {
    position: relative;
    padding: 8px 10px 10px 22px;
    border-bottom: 3px solid #e9e9e9;
  }
  .cart-show .circle {
    position: absolute;
    top: 40px;
    left: 3px;
    width: 16px;
    height: 16px;
    border-radius: 8px;
    border: 1px solid rgba(61, 18, 18, .5);
  }
  .active {
    background-color: #ff8d9e;
    border: 0px!important; 
  }
  .cart-show img {
    float: left;
    width: 65px;
    height: 83px;
    margin-right: 12px;
    border-radius: 4px;

  }
  .cart-show p {
    margin-bottom: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .cart-show .title {
    font-weight: 700;
  }
    
  .cart-show .desc {
    font-size: 13px;
  }
  .cart-show .price,
  .cart-show .num {
    font-size: 14px;
    font-weight: 700;
  }
  .cart-show .price {
    color: #e79326;
  }
  .cart-show .num {
    float: right;
  }
</style>