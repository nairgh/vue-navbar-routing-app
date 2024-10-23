// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import AboutPage from "../components/AboutPage.vue";
import ContactPage from "../components/ContactPage.vue";
import PostDetail from "../components/PostDetail.vue";
const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/about", name: "About", component: AboutPage },
  { path: "/contact", name: "Contact", component: ContactPage },
  { path: "/post/:id", name: "PostDetail",component: PostDetail, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
