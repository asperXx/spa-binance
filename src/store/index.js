import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeSymbolInfo: [],
    activeSymbolTitle: 'BTCUSDT'
  },
  mutations: {
    updateActiveSymbol(state, activeSymbol) {
      state.activeSymbolTitle = activeSymbol;
      axios
        .get("https://api.binance.com/api/v3/depth", {
          params: {
            symbol: activeSymbol,
            limit: 100
          }
        })
        .then(response => (
          state.activeSymbolInfo.unshift(response.data.bids, response.data.asks)
          ))
    }
  },
  actions: {
    updateActiveSymbol({commit}, activeSymbol) {
      commit('updateActiveSymbol', activeSymbol);
    },
  },
  getters: {
    activeSymbolInfo: s => s.activeSymbolInfo,
    activeSymbolTitle: s=> s.activeSymbolTitle
  }
})
