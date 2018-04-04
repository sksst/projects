<template>
  <div class="home">
    <mt-navbar v-model="selected">
      <mt-tab-item id="hot">热点</mt-tab-item>
      <mt-tab-item id="hearthstone">炉石传说</mt-tab-item>
      <mt-tab-item id="mtg">万智牌</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
  <mt-tab-container v-model="selected">
    <mt-tab-container-item id="hot">
    </mt-tab-container-item>
    <mt-tab-container-item id="hearthstone">
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <img src="http://wspic.iyingdi.cn/common/2018/03/17/9f6cda06-79a8-4501-8c1c-4ea78f6fde17.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="http://wspic.iyingdi.cn/common/2018/03/27/d564426a-3c85-445a-b2df-0a637066df3c.jpg" alt="">
        </mt-swipe-item>
      </mt-swipe>
      <div class="level-menu">
        <mt-button type="primary" size="small">套牌</mt-button>
        <mt-button type="primary" size="small">单卡</mt-button>
        <mt-button type="primary" size="small">直播</mt-button>
        <mt-button type="primary" size="small">精选</mt-button>
      </div>
      <article-feed-item :feedList="feedList"/>
      <div class="list-container"></div>
    </mt-tab-container-item>
    <mt-tab-container-item id="mtg">
      255
    </mt-tab-container-item>
  </mt-tab-container>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
import ArticleFeedItem from '@/base/article-feed-item/article-feed-item.vue'
export default {
  name: 'home',
  data() {
    return {
      selected: 'hearthstone',
      feedList: []
    }
  },
  created() {
    this._getFeed()
  },
  methods: {
    async _getFeed () {
      const res = await axios.get('/feed/list/seed/v2?web=1&seed=2&system=app')
      if (res.data.success) {
        this.feedList = res.data.feeds
      }
    }
  },
  components: {
    ArticleFeedItem
  }
}
</script>

<style lang="less">
  .home {
    height: calc(100% - 94px);
    overflow: scroll;
    /deep/ .mint-tab-container {
      margin-top: 8px;
    }
    /deep/ .mint-swipe {
      height: 180px;
      img {
        height: 100%;
      }
    }
    .level-menu {
      margin: 10px;
    }
    .list-container {
      border-top: 2px solid #ecf1f5;
    }
  }
</style>
