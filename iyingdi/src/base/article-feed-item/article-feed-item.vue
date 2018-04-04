<template>
  <div class="article-feed">
    <div class="article-feed-container" v-for="item in feedList" :key="item.id">
      <div class="default-style">
        <div class="left">
          <img :src="item.feed.icon" alt="" width="100%" height="100%">
        </div>
        <div class="right">
          <h4>{{item.feed.title}}</h4>
          <div class="info">
            <span class="time">
              <z-icon type="icon-time" size="12"/>
              {{calcTime(item.feed.created)}}</span>
            <span class="replay">
              <z-icon type="icon-chat" size="12"/>
              {{item.feed.reply}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import ZIcon from '@/base/z-icon/z-icon'
export default {
  name: 'article-feed-item',
  props: {
    feedList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    calcTime(OriginTime) {
      const time = 1000 * OriginTime
      const delta = Date.now() - time
      if (delta < (86400000)) {
        return Math.floor(delta / (3600000)) + '小时前'
      } else {
        const date = new Date(time)
        return (date.getMonth() + 1) + '月' + date.getDate() + '日'
      }
    }
  },
  components: {
    ZIcon
  }
}
</script>

<style lang="less">
.article-feed {
  .article-feed-container {
    padding: 10px;
    border-bottom: 1px solid #ecf1f5;
    .default-style {
      display: flex;
      .left {
        width: 30%;
      }
      .right {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 10px;
        .info {
          font-size: 12px;
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
}
</style>
