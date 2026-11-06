import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'

ModuleRegistry.registerModules([AllCommunityModule])

const app = createApp(App)

app.use(router)

app.mount('#app')
