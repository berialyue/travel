<template>
  <div>
    <h2 class="title">热销推荐</h2>
    <ul>
      <li class="item" border-bottom v-for="item of recommendList" :key="item.id">
          <img class="item-img" :src="item.recommendUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data() {
    return {
      recommendList: [{
        id: '001',
        recommendUrl: 'http://img1.qunarzz.com/sight/p0/1508/db/dbd0bef45fbc36b3.img.jpg_200x200_1b88abcf.jpg',
        title: '大唐芙蓉园',
        desc: '进入中国盛唐文化之旅',
      }, {
        id: '002',
        recommendUrl: 'http://img1.qunarzz.com/sight/p0/1505/cd/cd613f1ef0b23e1c.water.jpg_200x200_c79cc897.jpg',
        title: '西安东大秦龙温泉',
        desc: '特色皇家园林浴场，放松身心',
      }, {
        id: '003',
        recommendUrl: 'http://img1.qunarzz.com/sight/p0/1508/c5/a017645d82ab89f271fdfb1bd6ecc2e0.water.jpg_200x200_2de772de.jpg',
        title: '秦岭野生动物园',
        desc: '走进大自然，亲近小动物',
      }, {
        id: '004',
        recommendUrl: 'http://img1.qunarzz.com/sight/p0/1505/12/1207d28c272c5864.water.jpg_200x200_30119788.jpg',
        title: '翠华山',
        desc: '太乙真人修炼地，李世民避暑消夏',
      }, {
        id: '005',
        recommendUrl: 'http://img1.qunarzz.com/sight/p0/201403/10/d9d00b9ca4c645d5206626cf62cd7e75.jpg_200x200_dcb3e668.jpg',
        title: '梦回大唐',
        desc: '绚丽的歌舞带您穿越回千年前的盛唐',
      }, {
        id: '006',
        recommendUrl: 'http://img1.qunarzz.com/sight/p0/201403/05/8e0f82e5f51780d78062508f8ee8c973.jpg_200x200_378e2df6.jpg',
        title: '西安浐灞国家湿地公园',
        desc: '春季踏青赏花，夏季观荷采莲',
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
.item
  overflow: hidden;
  display: flex;
  height: 1.9rem;
  .item-img
    width: 1.7rem;
    height: 1.7rem;
    padding: .1rem;
  .item-info
    flex: 1;
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
    .item-button
      line-height: .44rem;
      margin-top: .16rem;
      background: #ff9300;
      padding: 0 .2rem;
      border-radius: .06rem;
      color: #fff;
</style>
