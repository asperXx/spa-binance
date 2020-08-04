<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="8">
    <DDSymbols />
    </v-col>
  <v-col cols = "10">
      <DiffChangesList />
</v-col>
    </v-row>
  </v-container>
</template>

<script>

import DDSymbols from "@/components/DDSymbols.vue";
import DiffChangesList from "@/components/DiffChangesList.vue";
export default {
  components: {
    DDSymbols,
    DiffChangesList
  },
};
</script>

<style>
</style>
