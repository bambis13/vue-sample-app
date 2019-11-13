<template>
    <v-app>
        <router-view></router-view>
    </v-app>
</template>

<script>

    export default {
        name: 'App',

        components: {},

        data: () => ({
            items: [
                {id: 1, title: "あいあいパラソル", src: "https://www.tv-asahi.co.jp/doraemon/contents/tool_a/0058/img/1_1.jpg"},
                {id: 2, title: "あいこグローブ", src: "https://www.tv-asahi.co.jp/doraemon/contents/tool_a/0137/img/1_1.jpg"},
                {
                    id: 3,
                    title: "会いたいヒト回転寿司",
                    src: "https://www.tv-asahi.co.jp/doraemon/contents/tool_a/0147/img/1_1.jpg"
                },
                {id: 4, title: "あいこグローブ", src: "https://www.tv-asahi.co.jp/doraemon/contents/tool_a/0137/img/1_1.jpg"},
                {id: 5, title: "あいこグローブ", src: "https://www.tv-asahi.co.jp/doraemon/contents/tool_a/0137/img/1_1.jpg"},
                {id: 6, title: "あいこグローブ", src: "https://www.tv-asahi.co.jp/doraemon/contents/tool_a/0137/img/1_1.jpg"}
            ]
        }),
    };
</script>
