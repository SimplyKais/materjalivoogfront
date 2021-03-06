import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import icons from 'material-design-icons-iconfont/dist/material-design-icons.css'
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios)

Vue.use(vuetify)
Vue.config.productionTip = false


new Vue({
    router,
    vuetify,
    icons,
    render: h => h(App)
}).$mount('#app')
