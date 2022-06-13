//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'

//datepicker
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas)
// vue
import { createApp } from 'vue'
import App from './App.vue'

//vue route 
import router from './router'

//firebase
import { auth } from './firebase/config'
import { onAuthStateChanged } from 'firebase/auth'

//gives firebase a chance to check if anyone is logged in (or login status/authentication status) before the entire application is mounted to DOM
let app
onAuthStateChanged(auth, () => {
    if (!app) {
        app = createApp(App).use(router)
        app.component('fa', FontAwesomeIcon) 
        app.component('Datepicker', Datepicker)      
                
        app.mount('#app')       
    }
})


