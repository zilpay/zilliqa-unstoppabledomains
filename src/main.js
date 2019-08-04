import Vue from 'vue'
import App from './App.vue'

import { vsCollapse, vsIcon } from 'vuesax'

Vue.config.productionTip = false

Vue.use(vsCollapse)
Vue.use(vsIcon)

Vue.prototype.$loader = () => {
  const spiner = window.document.querySelector('#spiner');
  const app = window.document.querySelector('#app');

  if (spiner.style.display === 'block' || spiner.style.display === '') {
    spiner.style.display = 'none';
    app.className = '';
  } else {
    app.className = 'is-load';
    spiner.style.display = 'block';
  }
}

new Vue({
  render: h => h(App),
}).$mount('#app')
