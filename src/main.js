import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import 'bootstrap'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueApexCharts from 'vue-apexcharts'

import Datetime from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.min.css'

import JsonCSV from 'vue-json-csv'
import Vuetable from 'vuetable-2'
import vuetify from './plugins/vuetify';

Vue.component('downloadCsv', JsonCSV)

Vue.use(Datetime)
Vue.use(Vuetable)

Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

Vue.config.productionTip = false

Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
