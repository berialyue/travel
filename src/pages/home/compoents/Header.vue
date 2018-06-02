<template>
  <div class="header">
    <div class="header-left">
      <svg class="icon"><use xlink:href="#back" /></svg>
    </div>
    <div class="header-input">输入城市/景点/游玩主题</div>
    <div class="header-right">城市</div>
  </div>
</template>

<script>
import '@/icons/svg/back.svg';

export default {
  name: 'HomeHeader',

};
</script>

<style lang="stylus" scoped>
.header
  display: flex
  line-height: .86rem
  background: #00bcd4
  color: #fff
  .header-left
    width: .64rem
    float: left
  .header-input
    flex: 1
    background: #fff
    border-radius: .1rem
    margin-top: .12rem
    margin-left: .2rem
    height: .64rem
    line-height: .64rem
    color: #ccc
  .header-right
    width: 1.24rem
    float: right
    text-align: center

.icon
  margin 0.12rem 0 0 0.2rem
  width: 0.36rem
  height: 0.36rem
</style>
