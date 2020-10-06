<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    Instagram Clone
    </v-app-bar>
    <v-main>
      <!-- <router-link :to="{ name: 'Home' }">User</router-link>       -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
