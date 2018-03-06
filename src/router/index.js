import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/acount/login/login.vue";
import Shop from "../components/shop/Shop.vue";

// 商品组件

import List from "../components/shop/goods/List.vue";//商品首页
import Deteil from "../components/shop/goods/Deteil.vue";//s商品详情
import Shopcart from "../components/shop/shopcart/Shopcart.vue";//购物车
import Site from "../components/shop/order/site.vue";//填写地址
import pay from "../components/shop/order/pay.vue";
import complete from "../components/shop/order/complete.vue";
// 开始路由
Vue.use(VueRouter)
// 配置shop里面的子组件，类别分明比较清晰
let goods=[
  {name:'list',path:'goods/list',component:List},
  { name: 'deteil', path: 'goods/deteil', component: Deteil},
];
let shopcart=[
  { name: 'shopcart', path: 'shopcart', component:Shopcart}
];

let oreder=[
  { name: 'site', path: 'site', component: Site},
  { name: 'pay', path:'pay',component:pay},
  { name: 'complete', path: 'complete', component:complete}
];


let router = new VueRouter({
  routes: [
    { name: 'login', path: '/login', component: Login },
    { name: 'shop', path: '/shop', component: Shop, children: [...goods, ...shopcart, ...oreder]}
  ]
})


export default router;
  
