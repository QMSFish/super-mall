<template>
  <div class='detail'>
    <detail-nav-bar :isactive="isactive" @active="changeActive"></detail-nav-bar>
    <bscroll class="detail-bscroll" :probeType="3" :click="true" @Bscroll="toScroll" ref="bscroll">
      <detail-swiper :topimages="images"></detail-swiper>
      <detail-content :goodContent="goodDetail"></detail-content>
      <detail-services :services="services"></detail-services>
      <detail-shop :shopdata="shopdata1"></detail-shop>
      <detail-desc :desc="desc"></detail-desc>
      <detail-display :displaydata="detailImage"></detail-display>
      <detail-parameters :parameters="parameters" ref="parameter"></detail-parameters>
      <detail-comment :comment="comment" ref="comment"></detail-comment>
      <goods-list :goods="recommend" ref="recommend" @loadImg="loadingImg"></goods-list>
    </bscroll>
    <detail-toolbar @addtocart="showModal" :cart="cart"></detail-toolbar>
    <detail-modalbox v-show="isCart"></detail-modalbox>
    <div class="backTop" v-show="isShow" @click="backTop"></div>
  </div>
</template>

<script>
import DetailNavBar from './detailChildComps/DetailNavBar'
import DetailSwiper from './detailChildComps/DetailSwiper'
import DetailContent from './detailChildComps/DetailContent'
import DetailServices from './detailChildComps/DetailServices'
import DetailShop from './detailChildComps/DetailShop'
import DetailDesc from './detailChildComps/DetailDesc'
import DetailDisplay from './detailChildComps/DetailDisplay'
import DetailParameters from './detailChildComps/DetailParameters'
import DetailComment from './detailChildComps/DetailComment'
import GoodsList from 'components/content/goods/GoodsList'
import DetailToolbar from './detailChildComps/DetailToolbar'
import DetailModalbox from './detailChildComps/DetailModalbox'
import Bscroll from 'components/common/Bscroll'


import {Good} from 'common/datahandle'
import {Params} from 'common/datahandle'
import {Cart} from 'common/datahandle'
import debounce from 'common/debounce'


import {getGoodDetailData} from 'network/detail'
import {getRecommendData} from 'network/detail'

export default {
  name: 'detail',
  data() {
    return {
      images: [],
      goodDetail: {},
      services: [],
      shopdata1: {},
      desc: null,
      detailImage: {},
      parameters: {},
      comment: {},
      recommend: [],
      isCart: false,
      cart: {},
      isactive: 0,
      isShow: false,
      bscroll: {},
      detailParameter: null,
      detailComment: null,
      detailRecommend: null,
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailContent,
    DetailServices,
    DetailShop,
    DetailDesc,
    DetailDisplay,
    DetailParameters,
    DetailComment,
    GoodsList,
    DetailToolbar,
    DetailModalbox,
    Bscroll
  },
  created() {
    // console.log(this.getQuery);
    // console.log(this.$route);
    // 1.请求详情数据
   this.getGoodDetailData1(this.getQuery);
   this.getRecommendData1();
  },
  updated() {
    this.bscroll._initScroll();
  },
  mounted() {
    // 获取dom元素
    this.$nextTick(() => {
    console.log(this.$refs.bscroll);
    //  this.bscroll = this.$refs.bscroll.scroll;
     this.bscroll = this.$refs.bscroll;
     this.detailParameter = this.$refs.parameter.$el;
     this.detailComment = this.$refs.comment.$el;
     this.detailRecommend = this.$refs.recommend.$el;
    })
  },
  computed: {
    getQuery() {
      return this.$route.params.iid
    }
  },
  methods: {
    getGoodDetailData1(iid) {
      getGoodDetailData(iid).then(res => {
          console.log(res);
          if(res) {
            this.images = res.result.itemInfo.topImages;
            this.goodDetail = new Good(res.result);
            // console.log(this.goodDetail);
            this.services = res.result.shopInfo.services;
            this.shopdata1 = res.result.shopInfo;
            this.desc = res.result.detailInfo.desc;
            this.detailImage = res.result.detailInfo.detailImage[0];
            this.parameters =new Params(res.result);
            // console.log(this.parameters);
            this.comment = res.result.rate;
            this.cart = new Cart(res);
            // console.log(this.cart);
          }
      })
    },
    getRecommendData1() {
      getRecommendData().then(res => {
        // console.log(res);
        this.recommend = res.data.list
      })
    },
    loadingImg() {
      debounce(this.refresh)
      // this.bscroll.scroll.refresh();
      // console.log("图片加载完成");
    },
    // better-scroll 图片加载后refresh
    refresh() {
      this.bscroll.scroll.refresh();
    },
    showModal() {
      this.isCart = true;
      setTimeout(() => {
        this.isCart = false
      }, 1500);
    },
    toScroll(position) {
      if((-position.y) >= 700) {
        this.isShow = true;
      } else {
        this.isShow = false;
      };
      if((-position.y) >= this.detailParameter.offsetTop) {
        this.isactive = 1;
      }else {
        this.isactive = 0;
      };
      if((-position.y) >= this.detailComment.offsetTop) {
        this.isactive = 2;
      };
      if((-position.y) >= this.detailRecommend.offsetTop) {
        this.isactive = 3;
      }
    },
    //回到顶部
    backTop() { 
      this.bscroll.scroll.scrollTo(0,0,500);
    },
    // 跳转到对应的位置
    changeActive(index) {
      this.isactive = index;
      let position = 0;
      switch(index) {
        case 0:
          position = 0;
          break;
        case 1:
          position = -this.detailParameter.offsetTop;
          break;
        case 2:
          position = -this.detailComment.offsetTop;
          break;
        case 3:
          position = -this.detailRecommend.offsetTop;
          break;
      }
      this.bscroll.scroll.scrollTo(0,position,500);
    }
  }
  
}

</script>
<style scoped>
  .detail {
    padding-top: 44px;
    height: 100vh;
  }
  .detail-bscroll {
    height: calc(100% - 55px);
    overflow: hidden;
  }
  .backTop {
    position: fixed;
    right: 15px;
    bottom: 75px;
    width: 43px;
    height: 43px;
    background: url(~assets/img/common/top.png) no-repeat;
    background-size: 43px;
  }
   
</style>