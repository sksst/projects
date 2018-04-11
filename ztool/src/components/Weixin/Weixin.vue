<template>
  <div class="weixin">233</div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      list: []
    }
  },
  created() {
    this._getSelectedWeixin()
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
    }
  },
}
</script>

<style lang="less" scoped>

</style>
