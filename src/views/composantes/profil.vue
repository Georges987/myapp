<template>
  <div>
    <v-container class="mx-9">
      <v-row>
        <v-col>
          <v-card dark class="pa-5">
            <v-card-title class="grey--text display-5 align-center justify-center bg">
              Your personals informations
            </v-card-title>
            <div>
            <v-row>
              <v-col class="pt-10 mt-15 pl-15 mb-10">
                <v-avatar size="300">
                  <img src="/my.jpg" />
                </v-avatar>
                <v-card-subtitle class="text-right grey--text display-2">Your name</v-card-subtitle>
              </v-col>
            </v-row>
            </div>
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
      <v-row class="mb-10 mt-7">
        <v-card width="100%" dark>
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
      cards: [
        { title: "Biographie", icon: "person", content: "My bio" },
        { title: "E Skills", icon: "skill", content: "my skills" },
        { title: "Other", icon: "star-outlined", content: "Hey Hey" },
      ],
      items: [
        { url: "/dot.jpeg" },
        { url: "/landing.jpg" },
        { url: "/large.png" },
        { url: "/vbanner.jpg" },
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
<style lang="css">
  .bg {
    width: 100%;
    height: 300px;
    position: absolute;
    top: 0;
    left: 0;
    background: url( 'https://cdn.pixabay.com/photo/2016/03/26/13/09/organic-1280537_1280.jpg') no-repeat center center;
    background-size: cover;
    background-color: red;
  }
</style>