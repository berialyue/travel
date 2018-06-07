<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :presentcity="presentcity" :hotcitys="hotcitys"></city-list>
    <city-alphabet></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios';
import CityHeader from './components/Header';
import CitySearch from './components/Search';
import CityList from './components/List';
import CityAlphabet from './components/Alphabet';

export default {
  name: 'City',
  data() {
    return {
      presentcity: '',
      hotcitys: [],
    };
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet,
  },
  methods: {
    getCityInfo() {
      axios.get('/api/city.json')
        .then(this.getCityInfoSucc);
    },
    getCityInfoSucc(res) {
      if (res.data.ret && res.data.data) {
        const data = res.data.data;
        this.presentcity = data.presentcity;
        this.hotcitys = data.hotcitys;
      }
    },
  },
  mounted() {
    this.getCityInfo();
  },
};
</script>

<style lang="stylus" scoped>

</style>
