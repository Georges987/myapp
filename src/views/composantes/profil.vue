<template>
  <div>
    <v-container class="mx-9">
      <v-row>
        <v-col>
          <v-card dark class="pa-5">
            <v-card-title class="grey--text display-5 align-center justify-center">
              Your personals informations
            </v-card-title>
            <v-row>
              <v-col class="pt-3 pl-15 mb-10">
                <v-avatar size="300">
                  <img src="/favicon.ico" />
                </v-avatar>
              </v-col>
              <v-col class="pt-16">
                <v-card-content class="grey--text">
                  <p class="red--text">
                    <span class="font-weight-bold">Your name</span>: {{ user.name }}<br />
                    <span class="font-weight-bold">Date of birth</span>: {{ user.date }}
                    <br />
                    <span class="font-weight-bold">Gender</span>: {{ user.gender }} <br />
                    <span class="font-weight-bold">Location</span>: {{ user.location }}
                    <br />
                    <span class="font-weight-bold">Age</span>: {{ user.age }} ans<br />
                    <span class="font-weight-bold">Phone number</span>: {{ user.phone }}
                    <br />
                    <span class="font-weight-bold">Mail address</span>: {{ user.mail }}
                    <br />
                  </p>
                </v-card-content>
              </v-col>
            </v-row>
            <v-row>
              <v-card-action class="pa-5">
                <edit />
              </v-card-action>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="pt-5">
        <v-col v-for="card in cards" :key="card.title">
          <v-card dark min-height="300px" class="pa-5">
            <v-card-title class="grey--text display-5 align-center justify-center">
              {{ card.title }}
            </v-card-title>
            <v-card-text>
              <span>
                <span class="font-weight-bold">{{ card.content }}</span>
              </span>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="mb-10">
        <v-card min-width="100%" dark class="pa-5">
          <v-carousel
            hide-delimiters
            cycle
            show-arrows-on-hover
            hide-overlay
            height="350px"
            width="100%"
          >
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.url"
            ></v-carousel-item>
          </v-carousel>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import edit from "@/components/edit";

export default {
  components: { edit },

  data() {
    return {
      newUser: "",

      user: {
        name: "Georges Ayeni",
        date: "18/01/2003",
        gender: "Male",
        location: "Cotonou",
        age: 19,
        phone: "+229 63744999",
        mail: "ayenigeorgepierre@gmail.com",
      },
      cards: [
        { title: "Biographie", icon: "person", content: "My name Georges Ayeni" },
        { title: "E Skills", icon: "skill", content: "I'm scientific don't be affraid" },
        { title: "Other", icon: "star-outlined", content: "Hey Hey" },
      ],
      items: [
        { url: "/avatar.jpg" },
        { url: "/favicon.ico" },
        { url: "/avatar.jpg" },
        { url: "/favicon.png" },
      ],
    };
  },
  methods: {
    setInfo() {
      this.user.name = this.$refs.name.textContent
    },
  },
};
</script>
