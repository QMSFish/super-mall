<template>
  <div class="home">
    <nav-bar class="home-navbar"><div slot="center" class="center">购物街</div></nav-bar>
    <home-swiper :bannerlist='banner'></home-swiper>
    

    
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from 'views/tabbar/home/homechildcomps/HomeSwiper'


import {getHomeMultidata} from 'network/home'


export default {
  name: "home",
  data() {
    return {
      banner: null,
      recommend: null
    }
  },
  components: {
    NavBar,
    HomeSwiper
    
  },
  created() {
    getHomeMultidata().then(res => {
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list
    })

  }
}
  
</script>
<style scoped>
  .home-navbar {
    background-color: var(--color-tint);
  }
  .center {
    color: var(--color-background);
    text-align: center;
    line-height: 44px;
  }
</style>