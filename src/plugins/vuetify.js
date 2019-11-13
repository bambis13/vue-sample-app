import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#128BE2',
        secondary: '#FEE12F',
        accent: '#5851DB',
        error: '#FCAF45',
        info: '#405DE6',
        success: '#5851DB',
        warning: '#F77737'
      },
    },
  },
  icons: {
    iconfont: 'md'
  },
});
