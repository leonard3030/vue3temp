import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CollectionsView from "../views/CollectionsView.vue";
import adminRoutes from "./adminRoutes";
import ContactView from "../views/ContactView.vue";
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
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  ...adminRoutes,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
