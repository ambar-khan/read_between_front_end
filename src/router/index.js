import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import EventsNew from '../views/EventsNew.vue';
import EventsIndex from '../views/EventsIndex.vue';
import EventsShow from '../views/EventsShow.vue';
import Signup from '../views/Signup.vue';
import Login from '../views/Login.vue';
import Logout from '../views/Logout.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/events/new',
    name: 'events-new',
    component: EventsNew
  },
  {
    path: '/events',
    name: 'events-index',
    component: EventsIndex
  },
  {
    path: '/events/:id',
    name: 'events-show',
    component: EventsShow
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/Login',
    name: 'login',
    component: Login
  },
  {
    path: '/Logout',
    name: 'logout',
    component: Logout
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
