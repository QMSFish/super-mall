<template>
  <div class="tabitem-top" @click="changeroute">
    <div v-if="!isactive">
      <slot name="top"></slot>
    </div>
    <div v-else>
      <slot name="middle"></slot>
    </div>
    <!-- <img src="../assets/img/tabbar/home.svg" alt=""> -->
    <div :class="{active: isactive}">
      <slot name="bottom"></slot>
    </div>
    <!-- <div>首页</div> -->
  </div>
</template>
 
<script>
export default { 
  name: 'tabitem',
  props: {
     path: String
  },
  data() {
    return {
      // isactive: this.$route.path === this.path
    }
  },
  computed: {
    isactive() {
      return this.$route.path === this.path
    }
  },
  methods: {
    changeroute() {
      this.$router.replace(this.path).catch(err => err);
      // console.log(this.$route.path);
      // console.log(this.path);
      // this.isactive = this.$route.path === this.path
      
    }
  }
  
}

</script>
<style scoped>
  .tabitem-top {
    font-size: 12px;
    flex: 1;
    text-align: center;
    height: 49px;
    margin-top: 6px;
  }
  .tabitem-top img {
    width: 20px;
    height: 20px;
    vertical-align: bottom;
  }
  .active {
    color: red;
  }
</style>