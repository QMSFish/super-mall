<template>
  <div class="swiper" ref="swiper">
    <div class="outer" ref="outer" 
     @transitionend="SeamlessRoll"
     @touchstart="startTouch" 
     @touchmove="moveTouch" 
     @touchend="endTouch">
     <swiper-item class="swiperLastItem" v-if="swiperlist">
        <a :href="swiperlist[swiperlist.length-1].link">
          <img :src="swiperlist[swiperlist.length-1].image" alt="">
        </a>
      </swiper-item>
      <slot></slot>
      <swiper-item class="swiperFirstItem" v-if="swiperlist">
        <a :href="swiperlist[0].link">
          <img :src="swiperlist[0].image" alt="">
        </a>
      </swiper-item>
    </div>
    <ol>
      <li v-for="(item , index) in swiperlist" :key="item.link" :class="{current: iscurrent===index}"></li>
    </ol>
  </div> 
</template>

<script>
// 这里有个bug没处理 ： 手指快速多次滑动轮播图、轮播图切换速度就变快了
// css中outer的width写死了 这也是个没解决的问题
import SwiperItem from './SwiperItem'
export default {
  name: 'swiper',
  components: {
    SwiperItem
  },
  data() {
    return {
      iscurrent: 0, //记录当前选中小li的index
      currentIndex: 1, // 当前的index
      totalWidth: 0, // swiper的宽度
      outerStyle: {}, //outer的样式
      interval: 3000, //定时器的时长
      flag1: true,
      flag: false,
      transaltex: 0,  //outer初始位置
      movex: 0,
      startx: 0,
      timer: null,
    }
  },
  props: {
    swiperlist: Array
  },
  mounted() {
    setTimeout(() => {
       this.handleDom();
    
       this.startTimer()
    },100)
    
  },
  methods: {
    // 1.获取要操作的元素
    handleDom() {
      let swiperEl = document.querySelector('.swiper');
      let outerEl =document.querySelector('.outer');
      this.outerStyle = outerEl.style;
      this.totalWidth = swiperEl.offsetWidth;
      // this.outerStyle.transform = 'translateX(0px)';

    },
    // 2. 利用定时器自动轮播图图片
    startTimer() {
     this.timer = setInterval(() => {
       this.currentIndex++;
       this.slowjump();
     }, this.interval);
    },
    //带有过渡 让outer跳转到目标位置
    slowjump() {
       this.outerStyle.transition = 'all .3s';
       this.transaltex =  - (this.currentIndex - 1) * this.totalWidth
       this.outerStyle.transform = 'translateX(' + this.transaltex +'px)';
    },
    // 无缝滚动
    // 等着我们过渡完成之后，再去判断 监听过渡完成的事件 transitionend 
    SeamlessRoll() {
      this.flag1 = true;
      if(this.currentIndex > 4) { //手指左滑动
        this.currentIndex = 1;
        this.jumpLoacation();
      } else if(this.currentIndex < 1) { //手指右滑动
        this.currentIndex = 4;
        this.jumpLoacation(); 
      };
      // 3. 小圆点跟随变化   最好是过渡执行完后
      this.iscurrent = this.currentIndex - 1;
    },
    // 去掉过渡效果 这样让我们的outer 快速的跳到目标位置
    jumpLoacation() {
      this.transaltex =  - (this.currentIndex - 1) * this.totalWidth;
      this.outerStyle.transition = 'none';
      // 利用最新的索引号乘以宽度 去滚动图片
      this.outerStyle.transform = 'translateX(' + this.transaltex +'px)';
    },
    // 4、手指滑动轮播图 
    startTouch(event) {
      this.flag = false;
      if(this.flag1) {
        // this.flag1 = false;
        // 触摸元素 touchstart： 获取手指初始坐标
        // console.log(event);
        // console.log(event.targetTouches["0"]);
        // console.log(typeof event.targetTouches);
        if(event) {
          this.startx = event.targetTouches["0"].pageX;
          this.timer && this.clearTimer();
          // console.log(11);
        }
      }
    },
    // 清除定时器
    clearTimer() {
      clearInterval(this.timer);
      this.timer = null;
    },
    // 移动手指 touchmove： 计算手指的滑动距离， 并且移动盒子
    moveTouch(event) {
      if(this.flag1) {
        // console.log(event);
        // console.log(typeof event.targetTouches);
        if(event) {
        this.movex = event.targetTouches["0"].pageX - this.startx;
        //移动盒子：盒子原来的位置 + 手指移动的距离
        this.transaltex =  - (this.currentIndex - 1) * this.totalWidth + this.movex;
        this.outerStyle.transition = 'none';
        this.outerStyle.transform = 'translateX(' + this.transaltex +'px)';
        this.flag = true; // 如果用户手指移动过我们再去判断否则不做判断效果
        event.preventDefault(); // 阻止滚动屏幕的行为
        // console.log(22);
        }
      }
    },
    // 手指离开 根据移动距离去判断是回弹还是播放上一张下一张
    endTouch() {
      if(this.flag) {
        this.flag1 = false;
        if(Math.abs(this.movex) > 50) {
          // 如果是右滑就是 播放上一张 moveX 是正值
          if(this.movex > 0) {
            this.currentIndex--;
          } else {
            // 如果是左滑就是 播放下一张 moveX 是负值
            this.currentIndex++;
          }
          this.slowjump();
        } else {
          this.transaltex =  - (this.currentIndex - 1) * this.totalWidth;
          this.outerStyle.transition = 'all .1s';
          this.outerStyle.transform = 'translateX(' + this.transaltex +'px)';
        }
        // console.log(33);
      }
      //手指离开的时候就重新开启定时器
      this.startTimer();
    }
  }

}

</script>
<style scoped>
  .swiper {
    position: relative;
    overflow: hidden;
  }
  .swiper .outer  {
    overflow: hidden;
    width: 1000%;
    margin-left: -100%;
  }
  .swiper-item {
    float: left;
    width: 10%;
  }
  .swiperFirstItem img,
  .swiperLastItem img {
    width: 100%;
    height: 195px;
  }
  .swiper ol {
    position: absolute;
    bottom: 5px;
    right: 5px;
    margin: 0;
  }
  .swiper ol li {
    display: inline-block;
    width: 5px;
    height: 5px;
    background-color: #fff;
    list-style: none;
    border-radius: 2px;
    transition: all .3s;
  }
  .swiper ol li.current {
    width: 15px;
    background-color: red;
  }


</style>