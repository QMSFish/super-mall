<template>
  <div>
    <tab-bar>
      <tab-item :path="'/home'">
        <img src="~assets/img/tabbar/home.svg" alt="" slot="top">
        <img src="~assets/img/tabbar/home_active.svg" alt="" slot="middle">
        <div slot="bottom">首页</div>
      </tab-item>
      <tab-item :path="'/category'">
        <img src="~assets/img/tabbar/category.svg" alt="" slot="top">
        <img src="~assets/img/tabbar/category_active.svg" alt="" slot="middle">
        <div slot="bottom">分类</div>
      </tab-item>
      <tab-item :path="'/shopcart'">
        <img src="~assets/img/tabbar/shopcart.svg" alt="" slot="top">
        <img src="~assets/img/tabbar/shopcart_active.svg" alt="" slot="middle">
        <div slot="bottom">购物车</div>
      </tab-item>
      <tab-item :path="'/profile'">
        <img src="~assets/img/tabbar/profile.svg" alt="" slot="top">
        <img src="~assets/img/tabbar/profile_active.svg" alt="" slot="middle">
        <div slot="bottom">我的</div>
      </tab-item>
      
    <!-- <div>分类</div>
    <div>购物车</div>
    <div>我的</div> -->
    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar';
import TabItem from 'components/common/tabbar/TabItem'
export default {
name: "mianTabbar",
components: {
  TabBar,
  TabItem
}
}

</script>
<style scoped>
</style>