<template>
  <div class="Home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
  </div>
</template>

<script>
import HomeHeader from './compoents/Header';
import HomeSwiper from './compoents/Swiper';
import HomeIcons from './compoents/icons';
import HomeRecommend from './compoents/Recommend';

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
  },
};
</script>

<style lang="stylus" scoped>

</style>
