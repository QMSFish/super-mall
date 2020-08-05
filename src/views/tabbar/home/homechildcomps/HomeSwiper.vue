<template>
  <swiper :swiperlist='bannerlist' class="homeswiper">
      <swiper-item v-for="item in bannerlist" :key="item.image">
        <a :href="item.link">
          <img :src="item.image" alt="">
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
  }

}

</script>
<style scoped>
  .homeswiper img {
    height: 195px;
    width: 100%;
  }
</style>