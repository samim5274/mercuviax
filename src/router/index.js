import { createRouter, createWebHistory } from 'vue-router';

import Index from '../components/main.vue'

const routes = [
   { path: '/', component: Index, meta: {title: "Welcome to MercuviaX"} },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {

  if (to.meta.title) {
    document.title = to.meta.title;
  }

  next();
});

export default router