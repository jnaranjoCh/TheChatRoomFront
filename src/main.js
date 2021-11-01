import { createApp } from 'vue'
import VueSocketIO from 'vue-3-socket.io'
import router from './router'
import store from './store'
import App from './App.vue'
import { urlApis } from './config/apisRutes'
import './styles/styles.scss'

createApp(App).use(store).use(router).use(new VueSocketIO({
    connection: urlApis.socketIP
})).mount('#app')