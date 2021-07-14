import Vue from "vue";
import VueRouter from "vue-router";
import login from "../views/login.vue";
import Inscription from "../views/Inscription.vue";
import Dashboard from "../views/Dashboard.vue";

import * as firebase from "firebase/app";
import "firebase/auth";
import bienvenue from "@/views/bienvenue";
import test from "@/views/test";
import meteo from "@/views/meteo";
import defis from "@/views/defis";
import sondages from "@/views/sondages";
import parametres from "@/views/parametres";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: login
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: "/meteo",
    name: "meteo",
    component: meteo,
    meta: { requiresAuth: true }
  },
  {
    path: "/defis",
    name: "defis",
    component: defis,
    meta: { requiresAuth: true }
  },
  {
    path: "/sondages",
    name: "sondages",
    component: sondages,
    meta: { requiresAuth: true }
  },
  {
    path: "/parametres",
    name: "parametres",
    component: parametres,
    meta: { requiresAuth: true }
  },
  {
    path: "/test",
    name: "test",
    component: test,
    meta: { requiresAuth: true }
  },
  {
    path: "/bienvenue",
    name: "bienvenue",
    component: bienvenue,
    meta: { requiresAuth: true }
  },

  {
    path: "/inscription",
    name: "inscription",
    component: Inscription
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  console.log("isauthenticated", isAuthenticated);
  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
