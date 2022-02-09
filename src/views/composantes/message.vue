<template>
  <div>
    <v-card>
      <v-toolbar color="dark" dark flat>
        <v-toolbar-title class="display-1">Messages</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
        <template v-slot:extension>
          <v-tabs v-model="tab" centered>
            <v-tabs-slider color="red"></v-tabs-slider>

            <v-tab v-for="slider in sliders" :key="slider">
              {{ slider }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>
      <v-tabs-items v-model="tab" height="100%">
        <v-tab-item align="center">
          <v-card width="700px">
            <v-list shaped>
              <v-list-item-group color="red">
                <v-list-item v-for="friend in recents" :key="friend.name">
                  <v-list-item-content align="center">
                    <v-list-item-title class="font-weight-bold">{{ friend.name }}</v-list-item-title>
                    <v-subheader>{{ friend.content }}</v-subheader>
                  </v-list-item-content>
                  <v-avatar size="70">
                    <img :src="friend.url" />
                  </v-avatar>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tab: null,
      sliders: [""],
      recents: [
        {
          name: "Max Whitman",
          url: "https://cdn.vuetifyjs.com/images/profiles/marcus.jpg",
          content: "Hey"
        },
        {
          name: "Setephen Steel",
          url: "/favicon.ico",
          content: "Send your mail"
        },
        {
          name: "Billy",
          url: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
          content: "Sorry Please"
        },
        {
          name: "L'ami",
          url:
            "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light",
          content: "We'll start tomorow..."
        },
        {
          name: "Romane",
          url: "/favicon.ico",
          content: "Sorry Please"
        },
      ],
    };
  },
};
</script>
