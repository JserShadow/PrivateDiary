import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
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

      return parseInt((date - pastDate) / (1000 * 60 * 60 * 24));
    }
  }
})
