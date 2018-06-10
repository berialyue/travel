<template>
  <div class="Home">
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
import axios from 'axios';
import HomeHeader from './components/Header';
import HomeSwiper from './components/Swiper';
import HomeIcons from './components/icons';
import HomeRecommend from './components/Recommend';
import HomeWeekend from './components/Weekend';

export default {
  name: 'Home',
  data() {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
    };
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
  },
  methods: {
    getHomeInfo() {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      if (res.data.ret && res.data.data) {
        const data = res.data.data;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
      }
    },
  },
  mounted() {
    this.getHomeInfo();
  },
};
</script>

<style lang="stylus" scoped>

</style>
