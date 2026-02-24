import { createApp } from 'vue'
import App from './App.vue'

const appTitle = 'Auraa'
const appSubtitle = 'Budżet domowy'
document.title = appTitle
createApp(App).provide('appTitle', appTitle).provide('appSubtitle', appSubtitle).mount('#app')
