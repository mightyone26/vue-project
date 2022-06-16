//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'

//elementplus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//datepicker primevue
import PrimeVue from 'primevue/config'
import Calendar from 'primevue/calendar'
//style
import 'primevue/resources/themes/lara-light-purple/theme.css' //theme
import 'primeicons/primeicons.css'                           //icons
import 'primevue/resources/primevue.min.css'                 //core css

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
        app = createApp(App).use(router).use(PrimeVue).use(ElementPlus)
        app.component('fa', FontAwesomeIcon) 
            
        
        //primevue calendar
        app.component('Calendar', Calendar)

        app.mount('#app')       
    }
})


