<template>
  <v-dialog v-model="sign" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn dark v-bind="attrs" v-on="on"> Sign up </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">User Profile</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="firstname"
                label="First name*"
                :rules="nameR"
                hint="Enter your first name"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="lastname"
                label="Last name"
                :rules="nameR"
                hint="Enter your last name"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="mail"
                :rules="mailR"
                label="Email*"
                hint="Enter your mail address"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="pass"
                :rules="passR"
                label="Password*"
                type="password"
                hint="Enter your password"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                :items="['0-17', '18-29', '30-54', '54+']"
                label="Age*"
                required
              ></v-select>
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="sign = false"> Close </v-btn>
        <v-btn color="blue darken-1" text @click="sign = false"> Sign up </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      name: "signup",
      sign: false,
      firstname: "",
      lastname: "",
      nameR: [
        (v) => !!v || "Please enter your name",
        (v) => v.length >= 3 || "Name must be more than 6 characters",
      ],
      mail: "",
      mailR: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      pass: "",
      passR: [
        (v) => !!v || "Password is required befor submit",
        (v) => v.length >= 8 || "Password must be more than 8 characters",
      ],
    };
  },
};
</script>
