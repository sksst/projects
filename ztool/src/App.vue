<template>
  <div id="app" height="100%">
    <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">2333</x-header>
    <view-box ref="viewBox" body-padding-top="46px"
              body-padding-bottom="55px"
              id="viewBox"
              >
      <transition name="vux-pop-in">
        <router-view class="router-view"></router-view>
      </transition>
    </view-box>
          <tabbar>
        <tabbar-item link="/" :selected="true">
          <img slot="icon" src="http://p6nm7eosi.bkt.clouddn.com/ios7-home.png">
          <span slot="label">主页</span>
        </tabbar-item>
        <tabbar-item link="/about">
          <img slot="icon" src="http://p6nm7eosi.bkt.clouddn.com/ios7-home.png">
          <span slot="label">关于</span>
        </tabbar-item>
      </tabbar>
  </div>
</template>

<script>
import { XHeader, ViewBox, Tabbar, TabbarItem } from 'vux'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'app',
  components: {
    XHeader,
    ViewBox,
    Tabbar,
    TabbarItem
  },
  computed: {
    ...mapState({
      route: state => state.route,
      path: state => state.route.path
    })
  },
  mounted() {
    this.handler = () => {
      if (this.path === '/top-news') {
        this.box = document.querySelector('.top-news')
        console.log(this.box.scrollTop)
        this.updateDemoPosition(this.box.scrollTop)
      }
    }
  },
  beforeDestroy () {
    this.box && this.box.removeEventListener('scroll', this.handler, false)
  },
  methods: {
    ...mapActions([
      'updateDemoPosition'
    ])
  },
  watch: {
    path (path) {
      if (path === '/top-news') {
        setTimeout(() => {
          this.box = document.querySelector('.top-news')
          if (this.box) {
            console.log(this.box)
            this.box.removeEventListener('scroll', this.handler, false)
            this.box.addEventListener('scroll', this.handler, false)
          }
        }, 1000)
      } else {
        this.box && this.box.removeEventListener('scroll', this.handler, false)
      }
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
html {
  font-family: 'STHeiti', 'Microsoft YaHei', 'Helvetica', 'Arial', sans-serif;
}
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  .vux_view_box_body {
    .vux-pop-out-enter-active,
    .vux-pop-out-leave-active,
    .vux-pop-in-enter-active,
    .vux-pop-in-leave-active {
      will-change: transform;
      transition: all 500ms;
      height: 100%;
      top: 46px;
      position: absolute;
      backface-visibility: hidden;
      perspective: 1000;
    }
    .vux-pop-out-enter {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
    .vux-pop-out-leave-active {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
    .vux-pop-in-enter {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
    .vux-pop-in-leave-active {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
  }
}
</style>
