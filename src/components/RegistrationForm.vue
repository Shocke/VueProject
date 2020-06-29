<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Registration form</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field label="Login" v-model="username" name="username" type="text" required="true"/>

              <v-text-field id="password"  v-model="password" label="Password" name="password" type="password" required="true"/>

              <v-text-field id="email"  v-model="email" label="E-Mail" name="email" type="email" required="true"/>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" v-on:click="registration">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "RegistrationForm",

  props: {
    source: String
  },

  data: function() {
    return {
      password: "",
      username: "",
      email: ""
    };
  },

  methods: {
    registration() {
      this.$store
        .dispatch("registration", {
          username: this.username,
          password: this.password,
          email: this.email
        })
        .then(response => {
          console.log("Registration successful: " + response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>