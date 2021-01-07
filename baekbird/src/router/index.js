import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ma001",
    component: () => import("@/views/ma001.vue"),
  },
  {
    path: "/about",
    name: "des001",
    component: () => import("@/views/des001.vue"),
  },
  {
    path: "/planning",
    name: "bs001",
    component: () => import("@/views/bs001.vue"),
  },
  {
    path: "/branding",
    name: "bs002",
    component: () => import("@/views/bs002.vue"),
  },
  {
    path: "/advertising",
    name: "bs003",
    component: () => import("@/views/bs003.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/views/qu001.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () => import("@/views/test.vue"),
  },
  {
    path: "/qu001t",
    name: "tequ001tst",
    component: () => import("@/views/qu001_test.vue"),
  },
  {
    path: "/service",
    name: "service",
    component: () => import("@/views/service.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
