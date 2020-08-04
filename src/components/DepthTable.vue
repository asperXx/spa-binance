<template>
<div id="app">
  <v-app id="inspire">
    <v-row justify="center" >
      <v-col cols="12">
        <h1>{{activeSymbolTitle}}</h1>
        <v-simple-table fixed-header height="600px" class="ggwp">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Amount</th>
                <th class="text-left">Price</th>
                <th class="text-left">Total</th>
                <th class="text-left">Amount</th>
                <th class="text-left">Price</th>
                <th class="text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,id) in 100" :key="id">

                <td>{{ activeSymbolInfo[0][id][0] }}</td>
                <td>{{ activeSymbolInfo[0][id][1] }}</td>

                <td>{{ activeSymbolInfo[0][id][0] * activeSymbolInfo[0][id][1]}}</td>
                <td>{{ activeSymbolInfo[1][id][0] }}</td>
                <td>{{ activeSymbolInfo[1][id][1] }}</td>
                <td>{{ activeSymbolInfo[1][id][0] * activeSymbolInfo[1][id][1]}}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-app>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data () {
    return{
    title: 'BTCUSDT'
    }
  },
  computed: {
    ...mapGetters(["activeSymbolInfo","activeSymbolTitle"]),
  },

};
</script>

<style lang="scss">
@media screen and (max-width: 500px) {
  tr td, th {
    display: block;
  }
}
</style>