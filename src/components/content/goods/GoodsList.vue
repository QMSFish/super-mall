<template>
  <div class='goodslist'>
    <good-item v-for="item in goods" :key="item.image" class="gooditem" @click.native="showGoodDetail(item.iid)">
      <img :src="item.show ? item.show.img : item.image" alt="">
      <div class="goods-info">
        <p>{{item.title}}</p>
        <span class="price">{{item.price}}</span>
        <span class="correct">{{item.cfav}}</span>
      </div>
    </good-item>
    
  </div>
</template>

<script>
import GoodItem from 'components/content/goods/GoodItem'
export default {
  name: 'goodslist',
  components: {
    GoodItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
   }
  },
  methods: {
    showGoodDetail(iid) {
      this.$router.push('/detail/' + iid)
      // this.$router.push({
      //   path: '/detail',
      //   query: {
      //     iid
      //   }
      // })
      // this.$emit('requestDetail',iid)
      // console.log(11);
    }
  },
  
}

</script>
<style scoped>
  .goodslist {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 5px 6px 5px 4px;
  }
  .gooditem {
    /* flex:0 0 40%; */
    /* position: relative; */
    padding-bottom: 10px;
    width: 48%;
  }
  .gooditem img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    font-size: 12px;
    /* position: relative; */
    
    text-align: center;

  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goods-info .correct {
    position: relative;
  }
  .goods-info .correct::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }

</style>