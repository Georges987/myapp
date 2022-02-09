<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12" sm="12" md="4" >
                    <v-card dark class="text-center">
                        <v-avatar>
                            <img src="/favicon.ico" alt="friends pics">
                        </v-avatar>
                        <v-card-title>
                            Friends.name
                        </v-card-title>
                        <v-card-subtitle>
                        
                        </v-card-subtitle>
                        <v-card-content>

                        </v-card-content>
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
            friend: [
                {name: "", profession: "", url: ""}
            ]
        }
    },
}
</script>