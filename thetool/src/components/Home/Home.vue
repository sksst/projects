<template>
  <div class="home">
    <div class="flex">
      <div class="flex-item" @click="goTopNews">
        <z-icon type="icon-xinwendongtai" size="36"/>
        <span>新闻头条</span>
      </div>
      <div class="flex-item" @click="goWeixin">
        <z-icon type="icon-weixin" size="36"/>
        <span>微信精选</span>
      </div>
      <div class="flex-item" @click="goCook">
        <z-icon type="icon-Food-Icons-" size="36"/>
        <span>菜谱大全</span>
      </div>
    </div>
  </div>
</template>

<script>
import ZIcon from '@/base/ZIcon/ZIcon.vue'
export default {
  methods: {
    goTopNews () {
      this.$router.push({ path: '/top-news' })
    },
    goWeixin () {
      this.$router.push({ path: '/weixin' })
    },
    goCook() {
      this.$router.push({ path: '/cook-category' })
    }
  },
  components: {
    ZIcon
  }
}
</script>

<style scoped lang="stylus">
.home
  .flex
    display: flex;
    .flex-item
      width: 33.33%;
      height: 100px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      &:nth-child(1), &:nth-child(2)
        border-right: 1px solid #cccccc;
      span
        font-size: 18px;
        line-height 36px;
</style>
