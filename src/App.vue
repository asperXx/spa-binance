<template>
  <div id="app">
  <v-app id="inspire">
    <v-app id="inspire">
      <v-navigation-drawer
        v-model="drawer"
        app
        clipped
      >
        <v-list dense>
          <v-list-item link :to="'/'">
            <v-list-item-action>
              <v-icon>fa-glass-whiskey</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Depth</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link :to="'/symbols'">
            <v-list-item-action>
              <v-icon>fa-stream</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Symbols</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  
      <v-app-bar
        app
        clipped-left
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>BINANCE INFO</v-toolbar-title>
      </v-app-bar>
  
      <v-main>
        <v-container
          fluid
        >
          <v-row
          >
            <router-view />
          </v-row>
        </v-container>
      </v-main>
  
      <v-footer app>
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </v-footer>
    </v-app>
  </v-app>
</div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
  }),
  created () {
    this.$vuetify.theme.dark = true
  },
}
</script>
