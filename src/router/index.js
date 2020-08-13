import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () =>
    import ('views/tabbar/home/Home')
const Category = () =>
    import ('views/tabbar/cate/Category')
const Shopcart = () =>
    import ('views/tabbar/shopcart/Shopcart')
const Profile = () =>
    import ('views/tabbar/profile/Profile')
const Detail = () =>
    import ('views/detail/Detail')

Vue.use(VueRouter);

const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/shopcart',
        component: Shopcart
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/detail/:iid',
        // params: {
        //     iid
        // },
        component: Detail
    }

]

// Vue-router V3.1.0版本里面新增功能：push和replace方法会返回一个promise, 你可能在控制台看到未捕获的异常
// 对Router原型链上的push、replace方法进行重写，这样就不用每次调用方法都要加上catch
// 重写代码现在还不是很懂
// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location, onResolve, onReject) {
//     if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
//     return originalPush.call(this, location).catch(err => err)
// }

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router