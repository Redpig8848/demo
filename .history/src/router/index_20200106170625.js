import Vue from 'vue'
import Router from 'vue-router'
import BottomNav from '@/components/common/Bottomnav'
import TopNav from '@/components/common/Topnav'
import shouye from '@/components/page/shouye'
import Member from '@/components/page/Member'
import Vip from '@/components/page/Vip'
import Youhui from '@/components/page/Youhui'
import jifen from '@/components/page/jifen'
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
    {
      path: '/shouye',
      component: shouye
    },
    {
      path: '/Youhui',
      component: Youhui
    },
    {
      path: '/Vip',
      component: Vip
    },
    {
      path: '/Member',
      component: Member,
      children: [
        {path: 'jifen', component: jifen}
      ]
    },
    {
      path: '/jifen',
      component: jifen
    }
  ]
})
// Vue.component('header-item', {
//   props: ['message', 'backUrl'],
//   template: `<header class="evaluate-header"><router-link :to="backUrl"><span><i class="iconfont">&#xe697;</i></span></router-link> <div><span>{{message}}</span></div> </header>`
// })
