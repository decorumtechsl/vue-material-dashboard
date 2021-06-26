import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";

// router setup
import routes from "./routes/routes";

// Plugins
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";

import store from "@/store/store";

import MaterialDashboard from "./material-dashboard";

// configure router
const router = new VueRouter({
  mode: "history",
  routes, // short for routes: routes
  linkExactActiveClass: "nav-item active"
});

Vue.use(VueRouter);
Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);


/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store:store
});
