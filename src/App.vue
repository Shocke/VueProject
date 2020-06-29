  
<template>
  <v-app id="app">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <router-link to="/Home">
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>
                <router-link to="/Home">Home</router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/Login" v-if="!loggedIn">
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>
                <router-link to="/Login">Login</router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/Registration" v-if="!loggedIn">
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>
                <router-link to="/Registration">Registration</router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

          <v-list-item link v-on:click="destroyToken" v-if="loggedIn">
            <v-list-item-content>
              <v-list-item-title>
                Logout
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item >


        <router-link to="/Serials" v-if="loggedIn">
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>
                <router-link to="/Serials">Serials</router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>SerialBase</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; {{new Date().getFullYear()}}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "app",

  props: {
    source: String
  },

  methods: {
    destroyToken: function() {
      this.$store
        .dispatch("destroyToken")
        .then(response => {
          this.$router.push("/Home");
          console.log("Destroying token: " + JSON.stringify(response));
        })
        .catch(error => {
          console.log("Token destroying error: " + error);
        });
    }
  },

  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    }
  },

  data: () => ({
    drawer: null
  })
};
</script>