import { createRouter, createWebHistory } from 'vue-router'
import { ref } from 'vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/counter',
      name: 'counter',
      component: () => import("../modules/counter/components/Counter.vue"),
    },
    {
      path: '/task-list',
      name: 'task list',
      component: () => import("../modules/taskList/components/TaskList.vue")
    },
    {
      path: '/register',
      name: 'register',
      component: () => import("../modules/register/views/RegisterView.vue")
    },
  ],
})

export default router
