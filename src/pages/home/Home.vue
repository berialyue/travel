<template>
  <div class="Home">
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeHeader from './compoents/Header';
import HomeSwiper from './compoents/Swiper';

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
  },
};
</script>

<style lang="stylus" scoped>

</style>
