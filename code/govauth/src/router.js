import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const base =
  process.env.NODE_ENV === "production"
    ? "/ga/"
    : "/";

export default new Router({
  mode: "history",
  base,

  routes: [

    {
      path: "*",
      name: "404*",
      meta: { layout: "no-sidebar" },
      component: require("@/pages/404.vue").default
    },
     {
      path: "/login",
      name: "login",
      meta: { layout: "no-sidebar" },
      component: require("@/pages/Login.vue")
    },
    {
      path: "/samples",
      name: "samples",
      meta: { layout: "no-sidebar" },
      component: require("@/pages/Samples.vue")
    },
    // Handsbills sample
    {
      path: "/handsbills/login",
      name: "hbLogin",
      meta: { layout: "empty" },
      component: require("@/pages/handsbills/Login.vue")
    },
    {
      path: "/handsbills/register",
      name: "hbRegister",
      meta: { layout: "empty" },
      component: require("@/pages/handsbills/Register.vue")
    },
    {
      path: "/handsbills/success",
      name: "success",
      meta: { layout: "empty" },
      component: require("@/pages/handsbills/Success.vue")
    },
    {
      path: "/register",
      name: "register",
      meta: { layout: "no-sidebar" },
      component: require("@/pages/Register.vue")
    },
    // Dash
    {
      path: "/dash",
      name: "dash",
      component: () => import("@/pages/Dash.vue")
    },
    {
      path: "/joinservice",
      name: "joinservice",
      component: () => import("@/pages/Business/JoinService.vue")
    },
    {
      path: "/joinbusiness",
      name: "joinbusiness",
      component: () => import("@/pages/Business/JoinBusiness.vue")
    },
    {
      path: "/manageusers",
      name: "manageusers",
      component: () => import("@/pages/Business/ManageUsers.vue")
    },
    {
      path: "/mybusiness",
      name: "mybusiness",
      component: () => import("@/pages/Business/MyBusiness.vue")
    },
    {
      path: "/business/profile",
      name: "businessprofile",
      component: () => import("@/pages/Business/MyProfile.vue")
    },
    {
      path: "/myprofile",
      name: "myprofile",
      component: () => import("@/pages/MyProfile.vue")
    }
  ]
});