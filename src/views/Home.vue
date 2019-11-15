<template>
  <div class="home">
    <v-app-bar app color="primary" dark>
      <router-link to="/">
        <v-btn text icon>
          <v-icon>category</v-icon>
        </v-btn>
      </router-link>
      <v-spacer></v-spacer>
      <router-link to="/post">
        <v-btn color="white" outlined>POST</v-btn>
      </router-link>
    </v-app-bar>
    <v-content>
      <v-row class="ma-5">
        <v-col v-for="item in items" v-bind:key="item.id" cols="6">
          <v-card class="pt-5">
            <v-img v-bind:src="item.src" max-height="200px" contain></v-img>
            <v-card-title class="font-weight-bold">{{item.title}}</v-card-title>
            <v-card-text>説明〜</v-card-text>
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
    items: [
      { title: "hoge" },
      { title: "hoge" },
      { title: "hoge" },
      { title: "hoge" },
      { title: "hoge" },
      { title: "hoge" },
      { title: "hoge" },
      { title: "hoge" },
      { title: "hoge" },
      { title: "hoge" }
    ],
    isActive: false
  })
};
</script>
