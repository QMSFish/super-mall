<template>
  <div class='wrapper' ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
 
export default {
  name: 'bscroll',
  data() {
    return {
      scroll: null,
    }
  },
  props: {
    // 默认情况下BScroll是不可以实时的监听滚动位置 probe 侦测
    // type: 0、1：不会侦测实时的位置
    //          2：在手指滚动的过程中侦测，手指离开后的惯性滚动过程中不侦测
    //          3：只要是滚动 就侦测实时的位置
    probeType: {
      type: Number,
      default() {
        return 1
      }
    },
    //  点击滚动区域是否派发click事件
    click: {
      type: Boolean,
      default() {
        return true
      }
    },
    //  是否开启横向滚动
    scrollX: {
      type: Boolean, 
      default() {
        return false
      }
    },
    //  是否派发滚动事件
    listenScroll: {
      type: Boolean,
      default() {
        return false
      }
    },
    //  是否派发滚动到底部的事件，用于上拉加载更多
    pullup: {
      type: Boolean,
      default() {
        return false
      }
    },
    // 是否派发顶部下拉的事件，用于下拉刷新
    pulldown: {
      type: Boolean,
      default() {
        return false
      }
    },
    // 是否派发列表滚动开始的事件
    beforeScroll: {
      type: Boolean,
      default() {
        return false
      }
    },
    // 当数据更新后，刷新scroll的延时
    refershDelay: {
      type: Number,
      default() {
        return 20
      }
    },
  },
  // mounted() {
  //   this.$nextTick(() => {
  //     this._initScroll();
  //   })
  // },
  methods: {
    _initScroll() {
      // if(!this.$refs.wrapper) {
      //   return 
      // };
      // better-scroll初始化
      if(!this.scroll) {
        // console.log(11);
        this.scroll = new BScroll(this.$refs.wrapper,{
          probeType: this.probeType,
          click: this.click,
          pullUpLoad: this.pullup,
        });
        this.scroll.on('scroll', pos => {
          // console.log(pos);
          this.$emit('Bscroll',pos);
        })
        this.scroll.on('pullingUp',() => {
          console.log('上拉加载更多');
          this.$emit('pullUp');
        })
      } else {
        // console.log(22);
        setTimeout(() => {
          this.scroll.refresh();
        }, 20);
      }
    }
  }
}

</script>
<style scoped>
</style>