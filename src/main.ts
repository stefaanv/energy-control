import App from './App.vue' // Components
import { createApp } from 'vue' // Composables
import { registerPlugins } from '@/plugins'

const app = createApp(App)
registerPlugins(app)
app.mount('#app')
