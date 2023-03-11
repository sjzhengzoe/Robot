import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Bots from "./pages/bots/index.vue";
import Bot from "./pages/bot/index.vue";
import Profile from "./pages/profile/index.vue";
import Components from "./pages/components/index.vue";
import FileUpload from "./pages/fileUpload/index.vue";
import Log from "./pages/log/index.vue";
import Analytics from "./pages/analytics/index.vue";
const router = createRouter({
  history: createWebHistory(`/`),
  routes: [
    { path: "/bots", component: Bots },
    { path: "/profile", component: Profile },
    { path: "/bot/:id", component: Bot },
    { path: "/bot/:id/components", component: Components },
    { path: "/bot/:id/fileUpload", component: FileUpload },
    { path: "/bot/:id/log", component: Log },
    { path: "/bot/:id/analytics", component: Analytics },
    {
      path: "/:pathMatch(.*)",
      redirect: "/bots",
    },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
