import { createApp } from 'vue'
import App from './App.vue'

const appTitle = 'My Money App'
document.title = appTitle
createApp(App).provide('appTitle', appTitle).mount('#app')
