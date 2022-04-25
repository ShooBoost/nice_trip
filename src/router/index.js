import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/spot",
    name: "spot",
    component: () =>
      import("../views/spot.vue"),
  },{
    path: "/searching",
    name: "searching",
    component: () =>
      import("../views/searching.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
