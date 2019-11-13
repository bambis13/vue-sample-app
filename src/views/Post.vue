<template>
    <div class="post">
        <v-app-bar
                app
                color="primary"
                dark
        >
            <router-link to="/">
                <v-btn text icon>
                    <v-icon>category</v-icon>
                </v-btn>
            </router-link>
            <v-spacer></v-spacer>
        </v-app-bar>
        <v-content class="ma-5">
            <v-row justify="center">
                <v-col cols="6">
                    <v-file-input label="Image upload" outlined dense prepend-icon="image"></v-file-input>
                </v-col>
            </v-row>
        </v-content>
    </div>
</template>
