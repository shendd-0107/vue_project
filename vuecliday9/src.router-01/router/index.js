import Vue from "vue";
import vueRouter from "vue-router";
import Admin from "../views/admin"
import Search from "../views/search"
import Person from "../views/person"
import Found from "../views/found"
import Myproject from "../views/myproject";

Vue.use(vueRouter)

export default new vueRouter({
    mode:"history",
    routes:[
        {
            path:"/",
            component:Admin
        },
        {
            path:"/person",
            component:Person
        },
        {
            path:"/found",
            component:Found
        },
        {
            path:"/myproject",
            component:Myproject
        }
        ,
        {
            path:"/search",
            component:Search
        }
    ]
})
