<template>
    <v-app>
        <Header :signed-in="signedIn"></Header>
        <v-content v-if="!signedIn" class="mt-5">
            <v-layout justify-center>
                <amplify-authenticator></amplify-authenticator>
            </v-layout>
        </v-content>
        <v-content v-else>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
    import {AmplifyEventBus} from 'aws-amplify-vue'
    import {Auth} from 'aws-amplify'
    import Header from "./components/Header";

    export default {
        name: "App",
        components: {Header},
        data: () => ({
          signedIn: false,
            items: [
                {
                    id: 1,
                    title: "あいあいパラソル",
                    src:
                        "https://www.tv-asahi.co.jp/doraemon/contents/tool_a/0058/img/1_1.jpg"
                },
                {
                    id: 2,
                    title: "あいこグローブ",
                    src:
                        "https://www.tv-asahi.co.jp/doraemon/contents/tool_a/0137/img/1_1.jpg"
                },
                {
                    id: 3,
                    title: "会いたいヒト回転寿司",
                    src:
                        "https://www.tv-asahi.co.jp/doraemon/contents/tool_a/0147/img/1_1.jpg"
                },
                {
                    id: 4,
                    title: "あいこグローブ",
                    src:
                        "https://www.tv-asahi.co.jp/doraemon/contents/tool_a/0137/img/1_1.jpg"
                },
                {
                    id: 5,
                    title: "あいこグローブ",
                    src:
                        "https://www.tv-asahi.co.jp/doraemon/contents/tool_a/0137/img/1_1.jpg"
                },
                {
                    id: 6,
                    title: "あいこグローブ",
                    src:
                        "https://www.tv-asahi.co.jp/doraemon/contents/tool_a/0137/img/1_1.jpg"
                }
            ]
        }),
        async beforeCreate() {
            try {
                let user = await Auth.currentAuthenticatedUser();
                window.console.log(user);
                this.signedIn = true
            } catch (err) {
                this.signedIn = false
            }
            AmplifyEventBus.$on('authState', info => {
                if (info === 'signedIn') {
                    this.signedIn = true
                } else {
                    this.signedIn = false
                }
            });
        },
    };
</script>
<!--reset css-->
<style>
    a {
        text-decoration: none;
    }
</style>
