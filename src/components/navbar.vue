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
        @click="logout()"
      >
        <v-icon left>exit_to_app</v-icon>
        Logout
      </v-btn>
    </v-app-bar>
    <v-tab></v-tab>
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
                  <v-btn depressed rounded text> Edit Account </v-btn>
                  <v-divider class="my-3"></v-divider>
                  <v-btn depressed rounded text> Disconnect </v-btn>
                </div>
              </v-list-item-content>
            </v-card>
          </v-menu>
        </v-list-item>
        <v-divider class="my-3"></v-divider>
        <div>
        <v-list-item v-for="link in links" :key="link.content" class="align-center justify-center">
          <v-icon large left>dashboard</v-icon>
          <v-list-content>
            <span>Hello world</span>
          </v-list-content>
        </v-list-item>
        <v-divider class="my-3"></v-divider>
        </div>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sidebar: true,
      hover: false,

      user: {
        initials: "JD",
        name: "jhdoe7",
        fullName: "John Doe",
        email: "john.doe@doe.com",
      },
      links: [
        {content: "Home", icon: "home", road: "/home"},
        {content: "My profile", icon: "profile", road: "/"+this.user.name},
        {content: "Friends", icon: "people", road: "/friends"},
        {content: "Message", icon: "message", road: "/message"},
        {content: "My Board", icon: "dashboard", road: "/dashboard"},
        {content: "Settings", icon: "settings", road: "/settings"}
      ],
      methods: {
        logout() {},
      },
    };
  },
};
</script>
