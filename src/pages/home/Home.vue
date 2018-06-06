<template>
  <div class="Home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
import HomeHeader from './compoents/Header';
import HomeSwiper from './compoents/Swiper';
import HomeIcons from './compoents/icons';

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
  },
};
</script>

<style lang="stylus" scoped>

</style>
