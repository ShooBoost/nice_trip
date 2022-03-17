import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/spotDetail",
    name: "spotDetail",
    component: () =>
      import("../views/spotDetail.vue"),
  },{
    path: "/searching",
    name: "searching",
    component: () =>
      import("../views/searching.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // history: createWebHistory(),
  routes,
});

export default router;
