import VCatalog from "@/components/v-catalog";
import VCart from "@/components/v-cart";
import VVitrina from "@/components/v-vitrina";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: "/",
        component: VCatalog,
        name : "home"
    },
    {
        path: "/cart",
        component: VCart,
        name : "cart",
        props : true
    },
    {
        path: "/vitrina",
        component: VVitrina,
        name : "vitrina"
    }

]
const router = createRouter({
    routes,
    history : createWebHistory()
})

export default router;
