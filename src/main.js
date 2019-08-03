import Vue from 'vue'
import App from './App.vue'

import { vsCollapse, vsIcon } from 'vuesax'

Vue.config.productionTip = false

Vue.use(vsCollapse)
Vue.use(vsIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')
