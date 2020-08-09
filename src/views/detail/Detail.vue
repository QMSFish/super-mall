<template>
  <div class='detail'>
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :topimages="images"></detail-swiper>
    <detail-content :goodContent="goodDetail"></detail-content>
    <detail-services :services="services"></detail-services>
    <detail-shop :shopdata="shopdata1"></detail-shop>
    <detail-desc :desc="desc"></detail-desc>
    <detail-display :displaydata="detailImage"></detail-display>
    <detail-parameters :parameters="parameters"></detail-parameters>
    <detail-comment :comment="comment"></detail-comment>
    <goods-list :goods="recommend"></goods-list>
    <detail-toolbar @addtocart="showModal" :cart="cart"></detail-toolbar>
    <detail-modalbox v-show="isCart"></detail-modalbox>
    <ul>
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
    </ul>
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


import {Good} from 'common/datahandle'
import {Params} from 'common/datahandle'
import {Cart} from 'common/datahandle'


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
    DetailModalbox
  },
  created() {
    // console.log(this.getQuery);
    // console.log(this.$route);
    // 1.请求详情数据
   this.getGoodDetailData1(this.getQuery);
   this.getRecommendData1();
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
      })
    },
    getRecommendData1() {
      getRecommendData().then(res => {
        // console.log(res);
        this.recommend = res.data.list
      })
    },

    showModal() {
      this.isCart = true;
      setTimeout(() => {
        this.isCart = false
      }, 1500);
    }
  }
  
}

</script>
<style scoped>
  .detail {
    padding-top: 44px;
  }
   
</style>