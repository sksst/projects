<template>
  <div id="app">
    <header class="cube-bar">
      <h1>cube-ui</h1>
    </header>
    <router-view class="router-view"/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
html, body
  height: 100%;
#app
  height: 100%;
  .cube-bar
    z-index: 10;
    position: absolute;
    right: 0;
    left: 0;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background-color: #edf0f4;
    box-shadow: 0 2px 1px #e9eaea;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  .router-view
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: scroll;
</style>
