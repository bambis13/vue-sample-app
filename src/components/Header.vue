<template>
    <v-app-bar app color="primary" dark>
        <router-link to="/">
            <v-btn text icon>
                <v-icon>category</v-icon>
            </v-btn>
        </router-link>
        <v-spacer></v-spacer>
        <div v-if="signedIn">
            <amplify-sign-out></amplify-sign-out>
        </div>
    </v-app-bar>
</template>

<script>
    export default {
        props: ["signedIn"],
        data: () => ({})
    };
</script>
