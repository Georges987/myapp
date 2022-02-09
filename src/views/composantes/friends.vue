<template>
    <div>
        <v-container class="mt-12">
            <v-row>
                <v-col cols="12" sm="12" md="4" v-for="friend in friends" :key="friend.name">
                    <v-card dark class="text-center" max-width="300px">
                        <v-avatar size="125">
                            <v-img src="friend.url" alt="friends pics"> </v-img>
                        </v-avatar>
                        <v-card-title class="display-1">
                            {{ friend.name }}
                        </v-card-title>
                        <v-card-subtitle class="text-left font-weight-italic">
                            {{ friend.profession }}
                        </v-card-subtitle>
                        <v-card-content>
                            {{ friend.bio }}
                        </v-card-content>
                        <v-card-actions class="pa-5">
                            <v-spacer></v-spacer>
                            <v-btn depressed rounded class="grey--text" router to="/message">
                                <v-icon small left> message </v-icon>
                                Message
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    data() {
        return {
            friends: [
                {name: "Max Whitman", profession: "Web dev", url: "https://cdn.vuetifyjs.com/images/profiles/marcus.jpg", bio: "I'm dev web but never busy for you guys"},
                {name: "Setephen Steel", profession: "Programmers", url: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460", bio: "I'm programmers so i've no life"},
                {name: "Billy", profession: "Accountant", url: "https://cdn.vuetifyjs.com/images/cards/halcyon.png", bio: "Hey browsers"},
                {name: "L'ami", profession: "Pentester", url: "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light", bio: "Hey"}
            ]
        }
    },
}
</script>