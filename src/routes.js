/**
 * Created by user on 2017/03/19.
 */
import Main from './components/Main.vue'
import SideBar from './components/SideBar.vue'

export const routes = [
    {
        path : '/',
        component : SideBar,
        keepAlive : true
    },
    {
        path : '/detail/:ticker',
        name : 'detail',
        component : Main
    }
]
