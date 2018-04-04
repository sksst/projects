<template>
  <div id="app">
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <router-view/>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <img slot="icon" src="http://p6nm7eosi.bkt.clouddn.com/ios7-home.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="tools">
        <img slot="icon" src="http://p6nm7eosi.bkt.clouddn.com/ios7-briefcase.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="chatboxes">
        <img slot="icon" src="http://p6nm7eosi.bkt.clouddn.com/chatboxes.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="mine">
        <img slot="icon" src="http://p6nm7eosi.bkt.clouddn.com/person.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'App',
  data() {
    return {
      selected: 'home'
    }
  },
  watch: {
    selected(val) {
      if (val === 'home') {
        this.$router.push('/home')
      } else if (val === 'tools') {
        this.$router.push('/tools')
      } else if (val === 'chatboxes') {
        this.$router.push('/chatboxes')
      } else if (val === 'mine') {
        this.$router.push('/mine')
      }
    }
  }
}
</script>

<style>
</style>
