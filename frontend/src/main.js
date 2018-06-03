import Vue from 'vue'
import App from './App'
import router from './router/index'
import buefy from 'buefy'

Vue.use(buefy);

Vue.config.devTools = true;
Vue.config.productionTip = false;
Vue.config.debug = true;

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
