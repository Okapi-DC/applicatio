import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
import axios from "axios";
import bootstrap from './plugin/bootstrap'
import Vuelidate from 'vuelidate'
import './style/custom.scss'
import VueKinesis from 'vue-kinesis'
import vuetify from './plugins/vuetify'

Vue.use(Vuelidate)
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.use(VueKinesis)

const firebaseConfig = {
  apiKey: "AIzaSyA9sg62bkUocq1rbT6t-Ndjl5-e0HT0WX4",
  authDomain: "okapi-tilt.firebaseapp.com",
  databaseURL: "https://okapi-tilt-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "okapi-tilt",
  storageBucket: "okapi-tilt.appspot.com",
  messagingSenderId: "289679892094",
  appId: "1:289679892094:web:ea5590d5a9953438c5822f",
  measurementId: "G-L6GPL8Z899"
};

firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(user => {
  console.log("user", user);
  if (!app) {
    app = new Vue({
      router,
      store,
      bootstrap,
      vuetify,
      render: h => h(App)
    }).$mount("#app");
  }
});

// app = new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount("#app");
