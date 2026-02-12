import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import PhotoResizePage from '../views/PhotoResizePage.vue'
import CriminalFaceTestPage from '../views/CriminalFaceTestPage.vue'
import PrivacyPage from '../views/PrivacyPage.vue'
import TermsPage from '../views/TermsPage.vue'
import AboutPage from '../views/AboutPage.vue'
import ContactPage from '../views/ContactPage.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: MainPage
  },
  {
    path: '/photo-resize',
    name: 'PhotoResize',
    component: PhotoResizePage
  },
  {
    path: '/criminal-face',
    name: 'CriminalFace',
    component: CriminalFaceTestPage
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: PrivacyPage
  },
  {
    path: '/terms',
    name: 'Terms',
    component: TermsPage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
