/**
 * Created by Tellyes_worker on 2017/11/22/0022.
 */
import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

import Mains from '@/components/Mains.vue'
import Login from '@/components/Login'
import Assign from '@/components/Assign'
import MessageBox from '@/components/MessageBox'
import UserList from '@/components/user/UserList'
import SavingAccount from '@/components/SavingAccount'
import CheckingAccount from '@/components/CheckingAccount'
import InterestAccount from '@/components/InterestAccount'
import UserInfoEdit from '@/components/user/UserInfoEdit'

Vue.use(VueResource)
Vue.use(Router)

export default new Router({

  routes:[
    {
      path:'/Mains',
      name:'Mains',
      component:Mains
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/register',
      name:'register',
      component:Assign
    },
    {
      path:'/messageBox',
      name:'messageBox',
      component:MessageBox
    },
    {
      path:'/userList',
      name:'userList',
      component:UserList
    },
    {
      path:'/savingAccount',
      name:'savingAccount',
      component:SavingAccount
    },
    {
      path:'/checkingAccount',
      name:'checkingAccount',
      component:CheckingAccount
    },
    {
      path:'/interestAccount',
      name:'interestAccount',
      component:InterestAccount
    },
    {
      path:'/userInfoEdit/:id',
      name:'userInfoEdit',
      component:UserInfoEdit
    }
  ]
})


