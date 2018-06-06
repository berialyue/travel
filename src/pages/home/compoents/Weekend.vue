<template>
  <div>
    <h2 class="title">周末去哪儿</h2>
    <ul>
      <li class="item" border-bottom v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.recommendUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data() {
    return {
      recommendList: [{
        id: '001',
        recommendUrl: 'http://img1.qunarzz.com/sight/source/1505/19/58f233e11df7ef.jpg_r_640x214_6b42c9fc.jpg',
        title: '西安必游TOP10',
        desc: '寻长安梦，开启穿越的圆梦之旅',
      }, {
        id: '002',
        recommendUrl: 'http://img1.qunarzz.com/sight/source/1511/14/1cf5dc2ecbfc16.jpg_r_640x214_b4b3a58a.jpg',
        title: '最美丝路行',
        desc: '情系西北，中国梦丝路行',
      }, {
        id: '003',
        recommendUrl: 'http://img1.qunarzz.com/sight/source/1507/fe/679926851c309a.jpg_r_640x214_114816de.jpg',
        title: '不一样的周末',
        desc: '这个周末玩点不一样的',
      }, {
        id: '004',
        recommendUrl: 'http://img1.qunarzz.com/sight/source/1507/98/d9c848b0d7d65a.jpg_r_640x214_55778a01.jpg',
        title: '就是爱大自然',
        desc: '这个周末爬爬山，呼吸呼吸新鲜空气',
      }, {
        id: '005',
        recommendUrl: 'http://img1.qunarzz.com/sight/source/1507/de/e6ba44d61894c0.jpg_r_640x214_847324d0.jpg',
        title: '西安演出在线',
        desc: '没事的时候，西安人最爱在这里观看演出',
      }],
    };
  },
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
  margin-top: .2rem
  line-height: .8rem;
  background: #eee;
  text-indent: .2rem;
.item-img-wrapper
  overflow: hidden;
  height: 0;
  padding-bottom: 33.9%
  .item-img
    width: 100%
.item-info
  padding: .1rem;
  min-width: 0;
  .item-title
    line-height: .54rem;
    font-size: .32rem;
    ellipsis()
  .item-desc
    line-height: .4rem
    color: #ccc;
    ellipsis()
</style>

