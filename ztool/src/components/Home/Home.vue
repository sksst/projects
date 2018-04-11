<template>
  <div class="home">
    <flexbox class="flexbox">
      <flexbox-item>
        <div class="flex-item vux-1px-r" @click="goTopNews">
          <z-icon type="icon-xinwendongtai" size="42"/>
          <span>新闻头条</span>
        </div>
      </flexbox-item>
      <flexbox-item>
        <div class="flex-item vux-1px-r" @click="goWeixin">
          <z-icon type="icon-weixin" size="42"/>
          <span>微信精选</span>
        </div>
      </flexbox-item>
      <flexbox-item><div class="flex-item ">3</div></flexbox-item>
    </flexbox>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem } from 'vux'
import ZIcon from '@/base/ZIcon/ZIcon.vue'
export default {
  methods: {
    goTopNews() {
      this.$router.push({ path: '/top-news' })
    },
    goWeixin() {
      this.$router.push({ path: '/weixin' })
    }
  },
  components: {
    Flexbox,
    FlexboxItem,
    ZIcon
  }
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
.home {
  .flex-item {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
}
</style>
