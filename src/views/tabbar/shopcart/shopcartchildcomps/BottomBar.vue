<template>
  <div class="bottom-bar">
    <div class="bottom-circle" @click="getslect" :class="{active: isactive}"></div>
    <span class="check-all">全选</span>
    <span>合计:￥{{price}}</span>
    <div class="bottom-total">去计算({{number}})</div>
  </div>
</template>

<script>
export default {
  name: 'bottombar',
  data() {
    return {
      isactive: false,
      info: true,
    }
  },
  props: {
    price: String,
    number: Number
  },
  created() {
    this.$bus.$on('checkall',() => {
      this.$store.state.cart.forEach(value => {
        if(!value.flag) {
          this.isactive = false;
          this.info = false;
          return;
        } 
      });
      if(this.info) {
        this.isactive = true;
      }
      this.info = true;
    })
  },
  methods: {
    getslect() {
      this.isactive = !this.isactive;
      this.$store.commit('changeall',this.isactive);
    }
  }
}

</script>
<style scoped>
  .bottom-bar {
    position: fixed;
    left: 0;
    bottom: 55px;
    padding-left: 25px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    background-color: #ececec;
  }
  .bottom-circle {
    position: absolute;
    top: 11px;
    left: 7px;
    width: 16px;
    height: 16px;
    border-radius: 8px;
    /* background-color: red; */
    border: 1px solid rgba(61, 18, 18, .5);
  }
  .bottom-bar .check-all {
    /* padding-right: 10px; 无效 */
    margin-right: 10px;
  }
  .bottom-total {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 90px;
    height: 100%;
    text-align: center;
    background-color: #ff5400;
    color: #ffff;
  }
  .active {
    background-color: #ff8d9e;
    border: 0px!important;
  }
</style>