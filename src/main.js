import { createApp } from 'vue'
import App from './App.vue'

// import css
// import './assets/css/app.css'

// import router
// import VueSweetalert2 from 'vue-sweetalert2';
// import 'sweetalert2/dist/sweetalert2.min.css'
import router from './router'

const app = createApp(App)
// app.use(VueSweetalert2);

  app.use(router)
  // app.mount('#app')
