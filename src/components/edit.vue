<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          depressed
          rounded
          :ripple="{ class: 'red--text' }"
          class="grey--text text-lowercase"
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-icon left>edit</v-icon>
          Edit
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark app>
          <v-btn icon dark @click="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Edit</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="setInfo()" @keyup.enter="setInfo()"> Save </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-container>
          <v-card>
            <v-card-title>
              <span class="text-h5">User Profile</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field ref="name" label=" Your name*" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field ref="mail" label="Email*" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      ref="pass"
                      label="Password*"
                      type="password"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      ref="age"
                      label="Age*"
                      type="number"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      ref="date"
                      label="birthdate*"
                      type="date"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      ref="gender"
                      label="Gender*"
                      type="text"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      ref="location"
                      label="location*"
                      type="text"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
          </v-card>
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    setInfo() {
      this.dialog = false
    }
  }
};
</script>
