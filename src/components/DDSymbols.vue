<template>
 <div>
      <v-overflow-btn
              class="my-2"
              :items="symbols"
              label="Select active symbol"
              v-model="activeSymbol"
            ></v-overflow-btn>
 </div>
</template>

<script>
export default {
    data () {
        return {
            symbols: ['BTCUSDT','BNBBTC','ETHBTC'],
            activeSymbol: ''
        }
    }
}
</script>

<style>

</style>