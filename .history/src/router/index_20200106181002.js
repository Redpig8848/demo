import Vue from 'vue'
import Router from 'vue-router'
import BottomNav from '@/components/common/Bottomnav'
import TopNav from '@/components/common/Topnav'
import shouye from '@/components/page/shouye'
import Member from '@/components/page/Member'
import Vip from '@/components/page/Vip'
import Youhui from '@/components/page/Youhui'
import Mingxi from '@/components/member/mingxi/mingxi'
import guanyu from '@/components/page/guanyu'
import { Step, Steps, Icon } from 'vant'

Vue.use(Router)
Vue.use(Step).use(Steps)
Vue.use(Icon)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/Mainnav', component: BottomNav},
    {path: '/Topnav', component: TopNav},
    {path: '/', component: shouye},
    {path: '/shouye', component: shouye},
    {path: '/Youhui', component: Youhui},
    {path: '/Vip', component: Vip},
    {
      path: '/Member',
      component: Member
      // children: [
      //   {path: 'jifen', component: jifen}
      // ]
    },
    {
      path: '/mingxi',
      component: Mingxi,
      meta: {index: 2, title: '<p>积分明细</p>'}
    },
    {
      path: '/guanyu',
      component: guanyu,
      meta: {index: 2, title: '<p>积分明细</p>'}
    }
  ]
})
