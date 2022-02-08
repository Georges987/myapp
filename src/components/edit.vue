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
        <v-toolbar dark>
          <v-btn icon dark @click="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Edit</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="setInfo()"> Save </v-btn>
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
                          <v-text-field label="New First name*" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            label="New Last name*"
                            hint="write just the name without space"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field label="Email*" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            label="Password*"
                            type="password"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-select
                            :items="[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]"
                            label="Age*"
                            required
                          ></v-select>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-autocomplete
                            :items="[
                              'Reading',
                              'Sport',
                              'Music',
                              'Art',
                              'Coding',
                              'Hacking',
                              'Writting',
                              'Cinema',
                              'mangas',
                            ]"
                            label="Your interests"
                            multiple
                          ></v-autocomplete>
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
      notifications: false,
      sound: true,
      widgets: false,
    };
  },
};
</script>
