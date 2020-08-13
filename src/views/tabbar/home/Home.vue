<template>
  <div class="home"> 
    <nav-bar class="home-navbar"><div slot="center" class="center-slot">购物街</div></nav-bar>
    <nav-control :navcontent="[{content: '流行',type: 'pop'},{content: '新款',type: 'sell'},{content: '精选',type: 'new'}]" 
    :iscurrent="iscurrent" @getactive="changeview" v-show="isShow" class="nav-controll"></nav-control>
    <bscroll class="home-bscroll" :probeType="2" :click="true" :pullup="true" @pullUp="requestData" 
    @Bscroll="toScroll"
    ref="bscroll">
      <home-swiper :bannerlist='banner'></home-swiper>
      <recommend :recommend="recommend"></recommend>
      <feature-view></feature-view>
      <nav-control :navcontent="[{content: '流行',type: 'pop'},{content: '新款',type: 'sell'},{content: '精选',type: 'new'}]" 
      :iscurrent="iscurrent" @getactive="changeview" ref="navcontrol"></nav-control>
      <goods-list :goods="goods[type].list" @loadImg="loadingImg"></goods-list>
    </bscroll>
    <div class="backTop" v-show="isShow" @click="backTop"></div>
    <!-- <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
      <li>31</li>
      <li>32</li>
      <li>33</li>
      <li>34</li>
      <li>35</li>
      <li>36</li>
      <li>37</li>
      <li>38</li>
      <li>39</li>
      <li>40</li>
      <li>41</li>
      <li>42</li>
      <li>43</li>
      <li>44</li>
      <li>45</li>
      <li>46</li>
      <li>47</li>
      <li>48</li>
      <li>49</li>
      <li>50</li>
      <li>51</li>
      <li>52</li>
      <li>53</li>
      <li>54</li>
      <li>55</li>
      <li>56</li>
      <li>57</li>
      <li>58</li>
      <li>59</li>
      <li>60</li>
      <li>61</li>
      <li>62</li>
      <li>63</li>
      <li>64</li>
      <li>65</li>
      <li>66</li>
      <li>67</li>
      <li>68</li>
      <li>69</li>
      <li>70</li>
      <li>71</li>
      <li>72</li>
      <li>73</li>
      <li>74</li>
      <li>75</li>
      <li>76</li>
      <li>77</li>
      <li>78</li>
      <li>79</li>
      <li>80</li>
      <li>81</li>
      <li>82</li>
      <li>83</li>
      <li>84</li>
      <li>85</li>
      <li>86</li>
      <li>87</li>
      <li>88</li>
      <li>89</li>
      <li>90</li>
      <li>91</li>
      <li>92</li>
      <li>93</li>
      <li>94</li>
      <li>95</li>
      <li>96</li>
      <li>97</li>
      <li>98</li>
      <li>99</li>
    </ul> -->
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from 'views/tabbar/home/homechildcomps/HomeSwiper'
import Recommend from 'views/tabbar/home/homechildcomps/RecommendView'
import FeatureView from 'views/tabbar/home/homechildcomps/FeatureView'
import NavControl from 'components/content/home/NavControl'
import GoodsList from 'components/content/goods/GoodsList'
import Bscroll from 'components/common/Bscroll'

import {getHomeMultidata} from 'network/home'
import {getHomeGoodsData} from 'network/home'

import debounce from 'common/debounce'



export default {
  name: "home",
  data() {
    return {
      banner: null,
      recommend: null,
      goods: {
        pop: {page: 0,list: []},
        sell: {page: 0,list: []},
        new: {page: 0,list: []}
      },
      type: 'pop',
      bscroll: {},
      navControl: {},
      isShow: false,
      iscurrent: 0,
      flag: false, // true的时候 执行finishPullUp()
      timer: null, //图片加载定时器

    }
  },
  components: {
    NavBar,
    HomeSwiper,
    Recommend,
    FeatureView,
    NavControl,
    GoodsList,
    Bscroll,
    
  },
  created() {
    // 1、请求多个数据
    this.getHomeMultidata1();

    // 2、请求初始商品数据
    this.getHomeGoodsData1('pop', 1);
    this.getHomeGoodsData1('sell', 1);
    this.getHomeGoodsData1('new', 1);
    // this.$nextTick(() => {
    //   this.bscroll._initScroll();
    // })
    // setTimeout(() => {
    //   this.bscroll._initScroll();
    // }, 2000);
  },
  //数据更新循环之后初始化或刷新better-scroll
  updated() {
    this.bscroll._initScroll();
    // console.log(this.$refs.bscroll.scroll); 
  }, 
  mounted() {
    // 获取dom元素
    this.bscroll = this.$refs.bscroll;
    // console.log(this.$refs.bscroll.scroll);
    this.navControl = this.$refs.navcontrol;
    // this.$nextTick(() => {
    //  this.bscroll = this.$refs.bscroll.scroll;
    //  this.navControl = this.$refs.navcontrol;
    // })

  },
  methods: {
    changeview(value) {
      this.type = value.type;
      this.iscurrent = value.index;
      console.log(this.type);
    },
    getHomeMultidata1() {
      getHomeMultidata().then(res => {
        if(res) {
          // console.log(res);
          // console.log("请求数据1");
          this.banner = res.data.banner.list;
          this.recommend = res.data.recommend.list
        }
    })},
    getHomeGoodsData1(type, n) {
      getHomeGoodsData(type, n).then(res => {
        if(res) {
          // console.log(res);
          // console.log("请求数据2");
          this.goods[type].list.push(...res.data.list);
          // console.log(this.goods[type].list);
          this.goods[type].page++;
          if(this.flag) {
            this.$nextTick(() => {
              this.bscroll.scroll.finishPullUp();
              this.flag = false;
            })
          }
        }
    })},
    //上拉加载更多页数据
    requestData() {
      this.flag = true;
      // console.log(this.$refs.bscroll);
      let page = this.goods[this.type].page;
      this.getHomeGoodsData1(this.type, page++)
      // 发送网络请求，请求更多页的数据
      //等待数据请求成功，并且将新的数据展示处理出来
      // setTimeout(() => {
      //     this.bscroll.scroll.finishPullUp()
      //   }, 2000);
    },
    toScroll(position) {
      // console.log(position);
      // console.log(this.navControl.$el);
      // console.log(this.navControl.offsetTop); // undefined
      // console.log(this.navControl.$el.offsetTop);
      if((-position.y) >= this.navControl.$el.offsetTop) {
        // better-scroll中内层fixed基本无效 偏移量只是相对于外层而言
        // this.navControl.$el.style.position = "absolute";
        // this.navControl.$el.style.top = "44px";
        // this.navControl.$el.style.left = "0";
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
    // 图片加载+设置防抖功能
    loadingImg() {
      debounce(this.refresh)
      // this.bscroll.scroll.refresh();
      // console.log("图片加载完成");
    },
    // better-scroll 图片加载后refresh
    refresh() {
      this.bscroll.scroll.refresh();
    },
    //回到顶部
    backTop() { 
      this.bscroll.scroll.scrollTo(0,0,500);
    }
  }
}
  
</script>
<style scoped>
  .home {
    padding-top: 44px;
    height: 100vh;
  }
  .nav-controll {
    position: fixed;
    top: 44px;
    left: 0;
    z-index: 2;
  }
  .home-navbar {
    background-color: var(--color-tint);
  }
  .home-bscroll {
    height: calc(100% - 55px);
    overflow: hidden;
    
  }
  .center-slot {
    color: var(--color-background);
    /* text-align: center; */
    line-height: 44px;
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