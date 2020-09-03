import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../src/components/Login.vue'
import Main from '../src/components/Main.vue'
import addMovie from '../src/components/addMovie'
import myPage from '../src/components/myPage'
import signUp from '../src/components/SignUp'
import Ticketing from '../src/components/Ticketing'
import userValidate from '../src/components/userValidate'
import movieList from '../src/components/movieList'
import myMovie from '../src/components/myMovie'

Vue.use(VueRouter);

// eslint-disable-next-line no-unused-vars
export const router = new VueRouter({
    mode : 'history',
    routes : [
      {
        path : './',
        component : Main
      },
      {
        path : '/Login',
        component : Login
      },
      {
        path : '/addMovie',
        component : addMovie
      },
      {
        path : '/movieList',
        component : movieList
      },
      {
        path : '/myPage',
        component : myPage
      },
      {
        path : '/Ticketing',
        component : Ticketing
      },
      {
        path : '/userValidation',
        component : userValidate
      },
      {
        path : '/myMovie',
        component : myMovie
      },
      {
        path : '/signUp',
        component : signUp
      }
    ]
  })