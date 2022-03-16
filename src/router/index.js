import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "./spotDetail",
    name: "spotDetail",
    component: () =>
      import(/* webpackChunkName: "spotDetail" */ "../views/spotDetail.vue"),
  },{
    path: "./searching",
    name: "searching",
    component: () =>
      import(/* webpackChunkName: "searching" */ "../views/searching.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
