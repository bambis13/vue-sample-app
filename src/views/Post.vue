<template>
  <div class="post">
    <v-app-bar app color="primary" dark>
      <router-link to="/">
        <v-btn text icon>
          <v-icon>category</v-icon>
        </v-btn>
      </router-link>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content class="ma-5">
      <form>
        <v-row justify="center" class="mt-5">
          <v-col cols="10" lg="6" md="8" sm="10">
            <v-text-field label="タイトル" single-line v-model="title"></v-text-field>
            <v-textarea
              outlined
              name="input-7-4"
              label="一言"
              v-model="explanation"
              @change="fujiwara"
            ></v-textarea>
            <v-file-input
              accept="image/*"
              label="画像"
              filled
              prepend-icon="image"
              v-on:change="onFileChange"
              :disabled="uploading"
            ></v-file-input>
          </v-col>
          <v-col cols="1">
            <v-btn
              color="primary"
              rounded
              outlined
              text
              :disabled="(!uploadedImage||!enabledPost)"
              :loading="uploading"
              @click="postImage"
            >POST</v-btn>
          </v-col>
          <v-col cols="6">
            <v-img v-show="uploadedImage" :src="uploadedImage" max-height="200px" contain />
          </v-col>
        </v-row>
      </form>
    </v-content>
  </div>
</template>
<script>
export default {
  name: "post",
  data: () => ({
    uploadedImage: "",
    uploading: false,
    enabledPost: false,
    title: "",
    explanation: ""
  }),
  watch: {
    title: function(val) {
      if (0 < val.length && val.length <= 10) {
        this.enabledPost = true;
      } else {
        this.enabledPost = false;
      }
    }
  },
  methods: {
    fujiwara() {
      this.explanation = this.explanation
        .split("")
        .map(function(s) {
          if (s === "゛") {
            return "";
          } else {
            return s + "゛";
          }
        })
        .join("");
    },
    onFileChange(e) {
      if (!e) return;
      this.createImage(e);
    },
    createImage(file) {
      let reader = new FileReader();
      reader.onload = e => {
        this.uploadedImage = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    postImage() {
      if (this.title.length === 0) {
        window.alert("タイトルを入力してください");
        return false;
      }
      if (this.explanation.length === 0) {
        window.alert("一言を入力してください");
        return false;
      }
      this.uploading = true;
    }
  }
};
</script>