<template>
  <div>
    <TopNav></TopNav>>
    <div class="yh-wrap main-wrap">
      <div><img src="../../assets/images/yh/yh-banner.png" alt=""></div>
      <div><img src="../../assets/images/yh/yh2-banner.png" alt=""></div>
      <div><img src="../../assets/images/yh/yh3-banner.png" alt=""></div>
      <div><img src="../../assets/images/yh/yh-banner.png" alt=""></div>
    </div>
    <BottomNav></BottomNav>
  </div>
</template>
<script>
import BottomNav from '@/components/common/Bottomnav'
import TopNav from '@/components/common/TopNav'

export default {
  name: 'App',
  components: {
    BottomNav,
    TopNav
  }
}
</script>
<style>

</style>
