<template>
  <div>
    <TopNav></TopNav>
    <div class="main-wrap shouye-contain">
      <!-- banner -->
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(banner, index) in bannerData" :key="index">
          <router-link :to=banner.link>
          <div class="banner-item">
            <img :src=banner.img alt />
          </div>
          </router-link>
        </swiper-slide>
        <!-- Optional controls -->
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        <!-- <div class="swiper-scrollbar index-banner-circle" slot="scrollbar"></div> -->
      </swiper>
      <!-- 滚动公告 -->
      <Notice></Notice>
      <!-- 推荐分类栏 -->
      <div class="recommend-wrap1">
        <el-tabs type="border-card" v-model="activateName">
          <template v-for="menu in menuData">
            <el-tab-pane :name="menu.index" :label="menu.name" :key="menu.index">
              <div class="items-pro" v-for="goods in menu.data" :key="goods.pk" @click="jumpOrder(goods.pk)">
                <div class="item-img-wrap"  v-if="goods.app_img">
                    <img :src="'https://bmw1984.com' + goods.app_img.url" alt="">
                </div>
                <div class="item-img-wrap"  v-else>
                    <img :src="'https://bmw1984.com' + goods.pc_img.url" alt="">
                </div>
                <div class="item-pro-text">
                  <b>{{goods.title}}</b>
                  <p>{{goods.description}}</p>
                  <span>{{goods.points}} 积分</span>
                </div>
              </div>
            </el-tab-pane>
          </template>
          <infinite-loading :identifier="infiniteId" @infinite="infiniteHandler"></infinite-loading>
        </el-tabs>
      </div>
    </div>
    <BottomNav></BottomNav>
  </div>
</template>
<script>
// 引用组件
import BottomNav from '@/components/common/Bottomnav'
import TopNav from '@/components/common/Topnav'
import Notice from '@/components/page/Notice'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import axios from 'axios'
import vuescroll from 'vuescroll'
import InfiniteLoading from 'vue-infinite-loading'

const api = 'https://bmw1984.com/api/mulu'

export default {
  name: 'App',
  components: {
    BottomNav,
    TopNav,
    swiper,
    swiperSlide,
    Notice,
    vuescroll,
    InfiniteLoading
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        }
      },
      bannerData: [
        {link: '/guessNBA', img: require('../../assets/images/banner/sy_NBA_banner@3x.png')},
        {link: '/chouJiang', img: require('../../assets/images/banner/sy_cgcj_banner@3x.png')},
      ],
      activateName: '0',
      menuData: [
        {name: '推荐', data: [], index: '0', url: '/tuijian/'},
        {name: '数码', data: [], index: '1', url: '/shuma/'},
        {name: '奖金', data: [], index: '2', url: '/jiangjin/'},
        {name: '生活', data: [], index: '3', url: '/shenghuo/'},
        {name: '奢华', data: [], index: '4', url: '/shehua/'},
      ],
      page: 1,
      newsType: 'https://bmw1984.com/api/mulu/tuijian/',
      infiniteId: +new Date(),
    }
  },
  created () {
    // axios
  },
  methods: {
    jumpOrder (id) {
      window.orderid = id
      this.$router.push('/order')
    },
    infiniteHandler($state) {
      axios.get(this.newsType, {
        params: {
          page: this.page,
          format: 'json',
        },
      })
      .then(({ data }) => {
        if (data.count) {
          this.page += 1;
          this.menuData[this.activateName].data.push(...data.results);
          $state.loaded();
        } else {
          $state.complete();
        }
      })
      .catch(error => {
        $state.complete();
      })
    }
  },
  watch: {
    'activateName': function(val){
      this.newsType = api + this.menuData[val].url
      this.page = 1
      this.infiniteId += 1,
      this.menuData[val].data = []
    }
  }
}
</script>
<style>
.swiper-container {
  height: 100%;
  margin-bottom: -4px;
}
/* .el-tabs__nav-wrap{
  width: 100%
} */
.el-tabs--border-card
  > .el-tabs__header
  .el-tabs__item:not(.is-disabled):hover {
  color: #ffffff;
}
.el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
  height: 39px;
}
.el-tabs__nav-wrap.is-scrollable {
  padding: 0 20px !important;
  box-sizing: border-box;
}
.shouye-contain .el-tabs--border-card > .el-tabs__content {
  padding: 15px 0 0 0;
}
.el-tabs__nav-prev,.el-tabs__nav-next {
  width: 20px;
  height: 40px;
  color: #ffffff;
  position: absolute;
  top: -3px
}
</style>