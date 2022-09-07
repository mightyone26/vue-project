// vue
import { createApp } from 'vue'
import App from './App.vue'
//bootstrap 
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import 'bootstrap-icons/font/bootstrap-icons.css'

//vue route 
import router from './router'

//firebase
import { auth } from './firebase/config'
import { onAuthStateChanged } from 'firebase/auth'

//gives firebase a chance to check if anyone is logged in (or login status/authentication status) before the entire application is mounted to DOM
let app
onAuthStateChanged(auth, () => {
    if (!app) {
        app = createApp(App).use(router).mount('#app')
    }
})

