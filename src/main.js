import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/scss/custom.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

const app = createApp(App)

app.use(router)

app.use(store)

app.mount('#app')
