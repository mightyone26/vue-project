import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CustomerDetails from '../views/CustomerDetails.vue'
import IndividualCustomerDetails from '../views/IndividualCustomerDetails.vue'
import EditBooking from '../views/EditBooking.vue'
import UserAccount from '../views/UserAccount.vue'

//firebase import
import { auth } from '../firebase/config'

//function to stop unauthorized user from viewing CustomerDetails page. Only admin can view. 
const onlyAdmin  = (to, from, next) => {
  let user = auth.currentUser

    if(user.uid === 'LEHrmzgkE5UZOryzxA2ionf4gSp1' ){
      next()
    }else{
      next({name: 'home'})
  }  
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView     
    },   
    {
      path: '/CustomerDetails',
      name: 'CustomerDetails',
      component: CustomerDetails,
      beforeEnter: onlyAdmin
      },
    {
      path: '/IndividualCustomerDetails/:id',
      name: 'IndividualCustomerDetails',
      component: IndividualCustomerDetails,
      beforeEnter: onlyAdmin
      },
    {
      path: '/EditBooking/:id',
      name: 'EditBooking',
      component: EditBooking,
      beforeEnter: onlyAdmin
      },    
    {
      path: '/UserAccount',
      name: 'UserAccount',
      component: UserAccount
      }    
  ]
})

export default router
