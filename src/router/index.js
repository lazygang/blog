import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('views/home/Home')
const Person = () => import('views/person/Person')
const GuestBook = () => import('views/guestbook/GuestBook')
// const Category = () => import('views/category/Category')
// const Profile = () => import('views/profile/Profile')
// const Cart = () => import('views/cart/Cart')
// const Detail = () => import('views/detail/Detail')

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/person',
    component:Person
  },
  {
    path:'/guest',
    component:GuestBook
  },
  // {
  //   path:'/category',
  //   component:Category
  // },
  // {
  //   path:'/profile',
  //   component: Profile
  // },
  // {
  //   path:'/detail/:iid',
  //   component: Detail
  // }
]

export default new Router({
  routes,
  mode: 'hash'
})
