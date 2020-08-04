<template>
 <div>
      <v-overflow-btn
              class="my-2"
              :items="symbols"
              label="Select active symbol"
              v-model="activeSymbol"
              @change="updateSymbol"
            ></v-overflow-btn>
 </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    data () {
        return {
            symbols: ['BTCUSDT','BNBBTC','ETHBTC'],
            activeSymbol: ''
        }
    },
    methods: {
        ...mapActions(["updateActiveSymbol"]),
        updateSymbol() {
            this.updateActiveSymbol(this.activeSymbol)
        }
    }
}
</script>

<style>

</style>