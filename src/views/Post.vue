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
      <v-row justify="center" class="mt-5">
        <v-col cols="10" lg="6" md="8" sm="10">
          <v-text-field label="名前" single-line></v-text-field>
          <v-textarea
            outlined
            name="input-7-4"
            label="説明"
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
            :disabled="!uploadedImage"
            :loading="uploading"
            @click="postImage"
          >POST</v-btn>
        </v-col>
        <v-col cols="6">
          <v-img v-show="uploadedImage" :src="uploadedImage" max-height="200px" contain />
        </v-col>
      </v-row>
    </v-content>
  </div>
</template>
<script>
export default {
  name: "post",
  data: () => ({
    uploadedImage: "",
    uploading: false
  }),
  methods: {
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
      this.uploading = true;
    }
  }
};
</script>