<template>
  <swiper :swiperlist='bannerlist' class="homeswiper">
      <swiper-item v-if="bannerlist">
        <a :href="bannerlist[getlength-1].link">
          <img :src="bannerlist[getlength-1].image" alt="">
        </a>
      </swiper-item>
      <swiper-item v-for="item in bannerlist" :key="item.image">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item> 
      <swiper-item v-if="bannerlist"> 
        <a :href="bannerlist[0].link">
          <img :src="bannerlist[0].image" alt="">
        </a>
      </swiper-item> 
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index'
export default {
  name: 'homeswiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    bannerlist: {
      type: Array,
    }
  },
  computed: {
    getlength() {
      return this.bannerlist.length
    }
  },

}

</script>
<style scoped>
  .homeswiper img {
    height: 195px;
    width: 100%;
  }
</style>