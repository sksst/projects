<template>
  <div class="cook-search">
    <div class="search-input-wrapper">
      <cube-input v-model="search" placeholder="菜谱名、食材名">
        <span slot="append" class="search-btn">搜索</span>
      </cube-input>
    </div>
    <div class="search-result-wrapper">
      <div class="empty-result" v-if="search.length === 0">
        请输入要搜索的关键字
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
.cook-search
  .search-input-wrapper
    padding: 6px 20px;
    .cube-input
      background: #edf0f4;
      .search-btn
        height: 32px;
        background: #ff4c39;
        border-radius: 2px;
        color: #fff;
        font-size: 14px;
        width: 100%;
        box-sizing: border-box;
        display: block;
        line-height: 32px;
        text-align: center;
        width: 55px;
  .search-result-wrapper
    .empty-result
      height: 64px;
      font-size: 16px;
      color: #666;
      line-height: 64px;
      text-align: center;
</style>
