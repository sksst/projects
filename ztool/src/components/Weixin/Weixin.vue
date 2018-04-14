<template>
  <div class="weixin" ref="list" @scroll="listenScroll" id="weixin">
    <group v-if="!!list">
      <cell-box v-for="item in list" :key="item.id">
        <a class="article-container" :href="item.url">
          <div class="img-wrapper">
            <img :src="item.firstImg" alt="" width="100px">
          </div>
          <div class="desc">
            <h3 class="title">{{item.title}}</h3>
            <!-- <p class="content">{{item.title}}</p> -->
            <div class="source">
              <span>{{item.source}}</span>
            </div>
          </div>
        </a>
      </cell-box>
    </group>
  </div>
</template>

<script>
import axios from 'axios'
import { Group, CellBox } from 'vux'
export default {
  data() {
    return {
      list: []
    }
  },
  created() {
    this._getSelectedWeixin()
  },
  mounted() {
    const list = this.$refs.list
    console.log(list.scrollTop)
  },
  methods: {
    async _getSelectedWeixin(pageNumber = 1, pageSize = 20) {
      this.$vux.loading.show({
        text: '正在加载'
      })
      const res = await axios.get('/api/weixin', {
        params: {
          pno: pageNumber,
          ps: pageSize
        }
      })
      if (!res.data.error_code) {
        this.list = res.data.result.list
      }
      this.$vux.loading.hide()
    },
    listenScroll() {
      console.log(233);
    }
  },
  components: {
    CellBox,
    Group
  }
}
</script>

<style lang="less" scoped>
.weixin {
  .article-container {
    width: 100%;
    display: flex;
    .img-wrapper {
      margin-right: 10px;
    }
    .desc {
      .title {
        font-size: 18px;
        font-weight: 400;
        color: #222222;
      }
      .content {
        font-size: 14px;
      }
      .source {
        font-size: 12px;
        color: #999999;
      }
    }
  }
}
</style>
