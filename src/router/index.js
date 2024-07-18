import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CollectionsView from "../views/CollectionsView.vue";
import adminRoutes from "./adminRoutes";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/collections",
    name: "collections",
    component: CollectionsView,
  },
  ...adminRoutes,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
