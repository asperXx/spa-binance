<template>
   <v-card
    class="mx-auto"
  >
    <v-list three-line>
      <template v-for="(item, index) in activeSymbolInfo">
        <v-list-item
          :key="index"
        >
          <v-list-item-avatar>
            <v-icon>fa-exclamation</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{item.lastUpdateId}}</v-list-item-title>
            <v-list-item-subtitle>{{item.bids}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
 data: () => ({
      
      }),
  computed: {
      ...mapGetters(["activeSymbolInfo"])
  },    
}
</script>

<style>

</style>