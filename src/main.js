import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import  "/node_modules/flag-icons/css/flag-icons.min.css" ;
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStars } from '@fortawesome/free-regular-svg-icons'
 

/* add icons to the library */
library.add(faUserSecret,faStar,faStars)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
