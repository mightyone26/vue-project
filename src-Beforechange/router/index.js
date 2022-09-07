import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ApplicationPage from '../views/ApplicationPage.vue'
import CustomerDetails from '../views/CustomerDetails.vue'
import IndividualCustomerDetails from '../views/IndividualCustomerDetails.vue'
import EditBooking from '../views/EditBooking.vue'
import LogInPage from '../views/LogInPage.vue'
import AvailableRooms from '../views/AvailableRooms.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView     
    },
    {
    path: '/ApplicationPage',
    name: 'ApplicationPage',
    component: ApplicationPage
    },
    {
      path: '/CustomerDetails',
      name: 'CustomerDetails',
      component: CustomerDetails
      },
    {
      path: '/IndividualCustomerDetails/:id',
      name: 'IndividualCustomerDetails',
      component: IndividualCustomerDetails
      },
    {
      path: '/EditBooking/:id',
      name: 'EditBooking',
      component: EditBooking
      },
    {
      path: '/LogInPage',
      name: 'LogInPage',
      component: LogInPage
      },
    {
      path: '/AvailableRooms',
      name: 'AvailableRooms',
      component: AvailableRooms
      }
  ]
})

export default router
