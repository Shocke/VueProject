<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Add form</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field id="name" v-model="name" label="Serial name"  name="name" type="text" required="true"/>

              <v-text-field id="description"  v-model="description" label="Description" name="description" type="text" required="true"/>

              <v-text-field id="imageUrl"  v-model="imageUrl" label="Image Url" name="imageUrl" type="text" required="true"/>

              <v-text-field id="rating"  v-model="rating" label="Rating" name="rating" type="number" required="true"/>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" v-on:click="add">Add</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AddSerial",

  props: {
    source: String
  },

  data: function() {
    return {
        name: "",
        description: "",
        imageUrl: "",
        rating: ""
    };
  },

  methods: {
      add(){
          this.$store
        .dispatch("AddSerial", {
          name: this.name,
          description: this.description,
          imageUrl: this.imageUrl,
          rating: this.rating
        }).then(response => {
          console.log("Serial adding successful: " + response);
        })
        .catch(error => {
          console.log(error);
        });
      }
  }
};
</script>