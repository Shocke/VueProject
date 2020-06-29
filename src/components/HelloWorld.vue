<template>
  <v-container>
    <v-container v-if="!loggedIn" class="display-1">
      Home page.
    </v-container>
    <v-container v-if="loggedIn" class="display-1">
      Welcome, {{user}}
    </v-container>
    </v-container>

</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    user: localStorage.getItem("username")
  }),

  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    }
  }
};
</script>
