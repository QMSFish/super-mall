<template>
   <nav-bar class='detail-navbar'>
      <div slot="left" @click="backclick" class="detail-left">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="detail-center">
        <span v-for="(item,index) in navcontent" 
        :key="item" 
        :class="{active: isactive === index}"
        @click="itemclick(index)"
        >{{item}}</span>
      </div>
    </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'detailnavbar',
  data() {
    return {
      navcontent: ['商品','参数','评价','推荐'],
      // isactive: 0
    }
  },
  props: {
    isactive: Number
  },
  components: {
    NavBar
  },
  methods: {
    itemclick(index) {
      this.$emit('active',index);
    },
    backclick() {
      this.$router.back();
    }
  }
}

</script>
<style scoped>
  .detail-navbar {
    background-color: #fff;
  }
  .detail-left {
    height: 100%;
    padding: 10px 0 0 15px;
  }
  .detail-center {
     flex: 1;
     display: flex;
     justify-content: space-around;
     line-height: 44px;
   }
  .detail-center span {
    flex: 1;
    text-align: center;
  }
  .active {
    color: var(--color-tint);
  }
  
</style>