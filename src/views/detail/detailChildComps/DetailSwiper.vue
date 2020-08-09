<template>
  <swiper :swiperlist='topimages' class="detailswiper">
      <swiper-item v-if="topimages">
        <a href="#">
          <img :src="topimages[getlength-1]" alt="">
        </a>
      </swiper-item>
      <swiper-item v-for="item in topimages" :key="item">
        <a href="#">
          <img :src="item" alt="">
        </a>
      </swiper-item>
      <swiper-item v-if="topimages"> 
        <a href="#">
          <img :src="topimages[0]" alt="">
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
    topimages: {
      type: Array,
    }
  },
  computed: {
    getlength() {
      return this.topimages.length
    }
  },
}

</script>
<style scoped>
  .detailswiper {
    height: 300px;
  }
  .detailswiper img {
    width: 100%;
  }
</style>