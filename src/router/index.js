import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../components/HomeView.vue";
import ChatView from "../components/ChatView.vue";

const router = createRouter({
  history: createWebHistory(''),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/chat",
      name:"chat",
      component: ChatView
    }
  ],
});

export default router;
