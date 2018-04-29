import Vue from 'vue'
import Router from 'vue-router'

import findMusicComponment from '@/components/findMusicComponment'
import MyMusicComponment from '@/components/myMusicComponment'
import FriendComponment from '@/components/friendComponment'
import MusicanComponment from '@/components/musicanComponment'
import DownloadComponment from '@/components/downloadComponment'

import CHMusic from '@/components/findMusic/recommend/CHMusic'
import HKMusic from '@/components/findMusic/recommend/HKMusic'
import JanpMusic from '@/components/findMusic/recommend/JanpMusic'
import WesternMusic from '@/components/findMusic/recommend/WesternMusic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/findMusic',
      name: 'findMusicComponment',
      component: findMusicComponment,
      children: [
        {
          path: '/CHMusic',
          name: 'CHMusic',
          component: CHMusic
        },
        {
          path: '/HKMusic',
          name: 'HKMusic',
          component: HKMusic
        },
        {
          path: '/JanpMusic',
          name: 'JanpMusic',
          component: JanpMusic
        },
        {
          path: '/WesternMusic',
          name: 'WesternMusic',
          component: WesternMusic
        }
      ]
    },
    {
      path: '/myMusic',
      name: 'MyMusicComponment',
      component: MyMusicComponment
    },
    {
      path: '/friend',
      name: 'FriendComponment',
      component: FriendComponment
    },
    {
      path: '/musican',
      name: 'MusicanComponment',
      component: MusicanComponment
    },
    {
      path: '/download',
      name: 'DownloadComponment',
      compnent: DownloadComponment
    },
    {
      path: '/',
      redirect:'/findMusic'
    }
  ]
})
