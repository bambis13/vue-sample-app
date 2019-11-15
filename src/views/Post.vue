<template>
    <div class="post">
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
                                @click="post"
                        >POST
                        </v-btn>
                    </v-col>
                    <v-col cols="6">
                        <v-img v-show="uploadedImage" :src="uploadedImage" max-height="200px" contain/>
                    </v-col>
                </v-row>
            </form>
        </v-content>
    </div>
</template>
<script>
    import {API, Storage} from 'aws-amplify'

    export default {
        name: "post",
        data: () => ({
            uploadedImage: "",
            uploading: false,
            enabledPost: false,
            title: "",
            explanation: "",
            imgExt: ""
        }),
        watch: {
            title: function (val) {
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
                    .map(function (s) {
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
                this.imgExt = file ? file.name.split(".").slice(-1)[0] : "";
            },
            post() {
                if (this.title.length === 0) {
                    window.alert("タイトルを入力してください");
                    return false;
                }
                if (this.explanation.length === 0) {
                    window.alert("一言を入力してください");
                    return false;
                }
                // this.uploading = true;
                Storage.put(`${Date.now()}.${this.imgExt}`, this.uploadedImage).then(async res => {
                    window.console.log(res);
                    await API.post("vuesampleapp1115", "/tweet", {
                        body: {
                            title: this.title,
                            explanation: this.explanation,
                            src: res.key
                        },
                        header: {},
                        mode: "cors"
                    }).then(re => {
                        window.console.log(re)
                    }).catch(err => {
                        window.console.error(err);
                    })
                }).catch(err => {
                    window.console.error(err);
                    window.alert("画像のアップロードに失敗しました");
                })
              // this.uploading = false
            }
        }
    };
</script>
