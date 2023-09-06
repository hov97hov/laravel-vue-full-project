import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from "vuex";
import router from './router/index.js'

const app = createApp(App)
const store = createStore({
    state: {
        count: 0,
    },
});

// use router
app.use(router)
app.use(store);
app.mount('#app')
