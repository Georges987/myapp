<template>
  <div>
    <v-app-bar clipped-left app dark class="text--white">
      <v-app-bar-title>
        <span class="white--text darken-3">My-</span>
        <span class="red--text darken-5">APP</span>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn
        depressed
        class="white--text text-capitalize"
        :ripple="{ class: 'red--text' }"
        router to="/"
        @click="logout()"
      >
        <v-icon left>exit_to_app</v-icon>
        Logout
      </v-btn>
    </v-app-bar>
    <!-- separted from my model of drawer -->
    <v-navigation-drawer
      app
      permanent
      clipped
      expand-on-hover
      mini-variant
      v-model="sidebar"
      color="red"
    >
      <v-list>
        <v-list-item class="align-center justify-center">
          <v-menu bottom min-width="200px" rounded offset-x color="purple">
            <template v-slot:activator="{ on }">
              <v-btn color="purple" icon x-large v-on="on">
                <v-avatar color="purple" size="40">
                  <span class="white--text text-h6">{{ user.initials }}</span>
                </v-avatar>
              </v-btn>
            </template>
            <v-card>
              <v-list-item-content class="justify-center">
                <div class="mx-auto text-center">
                  <v-avatar color="purple">
                    <span class="white--text text-h5">{{ user.initials }}</span>
                  </v-avatar>
                  <h3>{{ user.fullName }}</h3>
                  <p class="text-caption mt-1">
                    {{ user.email }}
                  </p>
                  <v-divider class="my-3"></v-divider>
                  <v-btn depressed rounded text> <edit /> </v-btn>
                  <v-divider class="my-3"></v-divider>
                  <v-btn depressed dark rounded class="grey--text text-lowercase"> 
                    <v-icon small left>exit_to_app</v-icon>
                    Disconnect 
                  </v-btn>
                </div>
              </v-list-item-content>
            </v-card>
          </v-menu>
        </v-list-item>
        <v-divider></v-divider>
        <div v-for="link in links" :key="link.content">
          <v-list-item router :to="link.road" class="align-center justify-center">
            <v-icon large left>{{ link.icon }}</v-icon>
            <v-list-content>
              <span>{{ link.content }}</span>
            </v-list-content>
          </v-list-item>
          <v-divider></v-divider>
        </div>
      </v-list>
    </v-navigation-drawer>

    <!-- Tutora -->

    <template>
      <v-footer padless app clipped-left depressed>
        <v-card tile width="100%" dark class="text-center">
          <v-divider></v-divider>
          <v-card-text class="white--text font-weight-bold">
            {{ new Date().getFullYear() }} — Made by
            <v-icon color="red">favorite</v-icon> whith vuetify
          </v-card-text>
        </v-card>
      </v-footer>
    </template>
  </div>
</template>
<script>
import edit from '@/components/edit';
export default {
  components: { edit },
  data() {
    return {
      sidebar: true,

      user: {
        initials: "I",
        name: "username",
        fullName: "userFullName",
        email: "usermail@x.com",
      },
      links: [
        { content: "My Board", icon: "dashboard", road: "/dashboard" },
        { content: "My profile", icon: "person", road: "/my-profile" },
        { content: "Friends", icon: "people", road: "/friends" },
        { content: "Message", icon: "message", road: "/message" },
        { content: "Settings", icon: "settings", road: "/settings" },
      ],
      methods: {
        logout() {},
      },
    };
  },
};
</script>
