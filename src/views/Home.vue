<template>
    <div class="home">
        <v-content>
            <v-layout justify-center="center">
                <router-link to="/post" class="col-6">
                    <v-btn color="primary" block rounded>投稿する</v-btn>
                </router-link>
            </v-layout>
            <v-row class="ma-5">
                <v-col v-for="item in items" v-bind:key="item.id" cols="6">
                    <v-card class="pt-5">
                        <v-img v-bind:src="item.src" max-height="200px" contain></v-img>
                        <v-card-title class="font-weight-bold">{{item.title}}</v-card-title>
                        <v-card-text>{{item.explanation}}</v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-content>
    </div>
</template>

<script>
    export default {
        name: "home",
        data: () => ({
            items: []
        })
    };
</script>
