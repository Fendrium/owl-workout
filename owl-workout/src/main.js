// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import AddExercise from './components/subcomponents/AddExercise.vue'

Vue.config.productionTip = false
Vue.use(Buefy)
Vue.component('add-exercise', AddExercise)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
