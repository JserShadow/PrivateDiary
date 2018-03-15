// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex';
import App from './App'
import HelloWorld from './components/HelloWorld.vue';
import Login from './components/login.vue';
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentTimeStatus: ['早上','中午','下午','晚上'],
    loveDays: 0
  },
  getters: {
    calCurrentTimeStatus: state => {
      const currentTime = new Date().getHours();
      if (currentTime >= 1 && currentTime < 11) {
        return state.currentTimeStatus[0];
      } else if (currentTime >= 11 && currentTime <13) {
        return state.currentTimeStatus[1];
      } else if (currentTime >= 13 && currentTime < 17) {
        return state.currentTimeStatus[2];
      } else {
        return state.currentTimeStatus[3];
      }
    },
    calLoveDays: state => {
      const date = Date.parse(new Date());
      const pastDate = Date.parse('2016.06.03');

      return parseInt((date-pastDate)/(1000*60*60*24));
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App, HelloWorld, Login },
  template: '<App/>'
})
