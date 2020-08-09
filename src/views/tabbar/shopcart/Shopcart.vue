<template>
  <div class="shopcart">
    <nav-bar class="cart-navbar">
      <div slot="center" class="center-slot">购物车({{getnumber}})</div>
    </nav-bar>
    <cart-detail :cart="cart"></cart-detail>
    <bottom-bar :price="getTotalprice" :number="getTotalnumber"></bottom-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import BottomBar from './shopcartchildcomps/BottomBar' 
import CartDetail from './shopcartchildcomps/CartDetail'
export default {
  name: "shopcart",
  data() {
    return {
      cart: [],
    }
  },
  components: {
    NavBar,
    BottomBar,
    CartDetail
  },
  computed: {
    getnumber() {
      if(this.cart.length !== 0) {
          return this.cart.reduce((pValue,cValue) => {
             return pValue + cValue.num;
          },0) ;
        } else {
          return 0;
      }
    },
    getTotalnumber() {
      if(this.cart.length !== 0) {
        let numA =  this.cart.filter(value => {
          return value.flag == true;
        });
        let number = 0; 
        if(numA.length !== 0) {
          number = numA.reduce((pValue,cValue) => {
             return pValue + cValue.num;
          },0) ;
        } else {
          return 0;
        }
        // es6里面有块级作用域  if里面有自己的作用域
        return number;
      } else {
        return 0;
      }
    },
    getTotalprice() {
      if(this.cart.length !== 0) {
        let priceA =  this.cart.filter(value => {
          return value.flag == true;
        });
        if(priceA.length !== 0) {
          return priceA.reduce((pValue,cValue) => {
            return pValue + cValue.price * cValue.num;
          },0).toFixed(2) ;
        } else {
          return '0';
        }
        // return price.toFixed(2);
      } else {
        return '0';
      }
    }
  },
  created() {
    // this.$bus.$on('addToCart', value => {
    //   console.log(11);
    //   console.log(value);
    //   this.cart = value;
    // })
    this.cart = this.$store.state.cart
  },
  
}

</script>
<style scoped>
  .shopcart {
    padding-top: 44px;
  }
  .shopcart .cart-navbar {
    background-color: var(--color-tint);
  }
  .shopcart .center-slot {
    color: var(--color-background);
    /* text-align: center; */
    line-height: 44px;
  }
</style>