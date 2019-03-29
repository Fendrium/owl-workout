// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import AddExercise from './components/fragments/AddExercise.vue'
import ExerciseSet from './components/fragments/ExerciseSet.vue'

Vue.config.productionTip = false
Vue.use(Buefy)
Vue.component('add-exercise', AddExercise)
Vue.component('exercise-set', ExerciseSet)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
