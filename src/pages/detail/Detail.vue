<template>
  <div>
    <detail-banner
      :sightName='sightName'
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import DetailBanner from './components/Banner';
import DetailHeader from './components/Header';
import DetailList from './components/List';

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
  },
  data() {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: [],
    };
  },
  methods: {
    getDetailInfo() {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id,
        },
      }).then(this.handleGetDataSucc);
    },
    handleGetDataSucc(res) {
      if (res.data.ret && res.data.data) {
        this.sightName = res.data.data.sightName;
        this.bannerImg = res.data.data.bannerImg;
        this.gallaryImgs = res.data.data.gallaryImgs;
        this.list = res.data.data.categoryList;
      }
    },
  },
  mounted() {
    this.getDetailInfo();
  },
};
</script>

<style lang="stylus" scoped>
.content
  height: 50rem
</style>

