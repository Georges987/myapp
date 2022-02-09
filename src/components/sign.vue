<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark>
          <v-toolbar-title>
            <span class="red--text">Sign in </span
            ><span>My-<span class="red--text">APP</span> </span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
              <signup />
          </v-toolbar-items>
        </v-toolbar>
        <v-form>
          <v-row class="mt-10">
            <v-col align="center">
              <v-card dark class="pa-5" width="550px">
                <v-card-title>
                  <span class="text-h5">Sign in</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="12" md="8">
                        <v-text-field
                          v-model="mail"
                          label="Mail address*"
                          type="email"
                          :rules="mailR"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" sm="12" md="8">
                        <v-text-field
                          name="pass"
                          :rules="passR"
                          label="Password*"
                          type="password"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                  <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    @keydown.enter="dialog = false"
                    router
                    to="/home"
                    depressed
                    rounded
                    @click="submit"
                    :ripple="{ class: 'red--text' }"
                    class="grey--text text-capitalize"
                    text
                  >
                    <v-icon left>key</v-icon>
                    connexion
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import signup from '@/components/signup';
export default {
  components: { signup },
  data() {
    return {
      dialog: true,
      name: "sign",
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
  methods: {
    setInfo() {
      this.dialog = false;
    },
  },
};
</script>
