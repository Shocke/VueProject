<template>
  <v-container class="d-flex align-content-space-around flex-wrap">
    <router-link to="/AddSerial"><v-btn color="orange">Add Serial</v-btn></router-link>
    <v-card class="m-5" max-width="400" v-for="serial in serialsList" v-bind:key="serial">
      <v-img
        v-bind:key="serial.imageUrl"
        class="white--text align-end"
        height="200px"
        :src="serial.imageUrl"
      ></v-img>
      <v-card-text class="text--primary" scrollable="true">
        <div v-bind:key="serial.name">Название: {{serial.name}}</div>
        <div v-bind:key="serial.rating">Рейтинг: {{serial.rating}}</div>
        <div v-bind:key="serial.description">Описание: {{serial.description}}</div>
        <v-btn color="orange" @click="showWindow(serial)">Detail</v-btn>
      </v-card-text>

      <v-card-actions></v-card-actions>
    </v-card>

    <v-dialog v-model="dialog" :retain-focus="false" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2" v-model="name" primary-title>{{name}}</v-card-title>
        <v-img v-model="imageUrl" class="white--text align-center" height="200px" :src="imageUrl"></v-img>
        <v-card-text v-model="description">Описание: {{description}}</v-card-text>
        <v-card-text v-model="rating">Рейтинг: {{rating}}</v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">Закрыть</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    
  </v-container>
</template>

<script>
export default {
  name: "Serials",

  data() {
    return {
      dialog: false,
      serialsList: "",
      id: "",
      rating: "",
      name: "",
      imageUrl: "",
      description: ""
    };
  },

  methods: {
    getSerialsList() {
      this.$store
        .dispatch("getSerials")
        .then(response => {
          this.serialsList = response.data;
        })
        .catch(error => {
          alert(error);
          console.log(error);
        });
    },

    showWindow(serial) {
      this.description = serial.description;
      this.rating = serial.rating;
      this.id = serial.id;
      this.name = serial.name;
      this.imageUrl = serial.imageUrl;
      this.dialog = true;
    }
  },

  computed: {
    isAdmin() {
      return this.$store.getters.isAdmin;
    }
  },

  beforeMount() {
    this.getSerialsList();
  }
};
</script>