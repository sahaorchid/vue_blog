import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Blogs from '../views/Blogs.vue'
import Detail from '../views/Detail.vue'
import Create from '../views/Create.vue'
import Update from '../views/Update.vue'
// import Listing from '../views/Listing.vue'


const routes = [
  {
    path: '/',
    name: 'Blogs',
    component: Blogs
  },
  {
    path: '/update/:id',
    name: 'Update',
    component: Update
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/blog/:id',
    name: 'Detail',
    component: Detail
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
