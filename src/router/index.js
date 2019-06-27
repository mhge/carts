import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Vant from "vant";
import "vant/lib/index.css";
//模板+四大主页面
import Main from "../view/main.vue";
import Home from "../view/home.vue";
import Search from "../view/search.vue";
import Friend from "../view/friend.vue";
import Fashion from "../view/fashion.vue";

//登录注册
import Res from "../view/res.vue";
import Login from "../view/login.vue";
//配饰
import Ps from "../view/ps.vue";
import Detail from "../view/detail.vue";
//购物车详情
import Order from "../view/order.vue";
import Cart from "../view/cart.vue";

import Address from "../view/address.vue";
Vue.use(Vant);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/main",
      component: Main,
      redirect: "/home",
      children: [
        { path: "/home", component: Home },
        { path: "/search", component: Search },
        { path: "/friend", component: Friend },
        { path: "/fashion", component: Fashion }
      ]
    },
    {
      path: "/res",
      component: Res
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/ps",
      component: Ps
    },
    {
      path: "/detail/:pid",
      component: Detail
    },
    {
      path: "/order/:pid",
      component: Order
    },
    {
      path: "/address",
      component: Address
    },
    {
      path: "/cart",
      component: Cart
    }
  ]
});
