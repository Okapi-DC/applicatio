<template>
  <div class="row">
    <div class="col-md-6">
      <navbar></navbar>
      <b-form @submit.prevent="pressed" @submit.stop.prevent="onSubmit">

        <div class="email">
          <b-form-group>
            <b-form-input v-model="$v.form.email.$model" :state="validateState('email')" type="email" class="input_01" placeholder="Adresse email"></b-form-input>
            <b-form-invalid-feedback v-if="!$v.form.email.minLength">Il te faut au moins 3 caractères !</b-form-invalid-feedback>
            <b-form-invalid-feedback v-if="!$v.form.email.required">Adresse requis</b-form-invalid-feedback>
            <b-form-invalid-feedback v-if="!$v.form.email.email">Il faut entrer une adresse mail valide !</b-form-invalid-feedback>
          </b-form-group>
        </div>

        <div class="password">
          <b-form-group>
            <b-form-input :type="visibility" v-model="$v.form.password.$model" :state="validateState('password')"  class="input_01" placeholder="Mot de passe" value=""/>
            <p @click="showPassword()" v-if="visibility == 'password'">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
              </svg>
            </p>
            <p @click="hidePassword()" v-if="visibility == 'text'">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
                <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
                <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
                <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
              </svg>
            </p>
            <b-form-invalid-feedback v-if="!$v.form.password.minLength">Il te faut au moins 8 caractères !</b-form-invalid-feedback>
            <b-form-invalid-feedback v-if="!$v.form.password.required">Mot de passe requis</b-form-invalid-feedback>
          </b-form-group>
        </div>

        <div>
          <b-form-group>
            <b-form-input class="input_01" v-model.trim="$v.form.repeatPassword.$model" :state="validateState('repeatPassword')" type="password" placeholder="Confirmation"></b-form-input>
            <p @click="showPassword()" v-if="visibility == 'password'">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
              </svg>
            </p>
            <p @click="hidePassword()" v-if="visibility == 'text'">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
                <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
                <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
                <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
              </svg>
            </p>
            <b-form-invalid-feedback v-if="!$v.form.repeatPassword.sameAs">Il ne sont pas identique</b-form-invalid-feedback>
          </b-form-group>
        </div>

        <b-button class="btn_01 margin_top_30" type="submit">Connexion</b-button>

      </b-form>
    </div>


    <div class="col-md-6">
      <img class="photo-gris" v-bind:src="require('@/assets/business.jpg')" alt="service-image">
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import navbar from '@/components/layout/navbar'
import { validationMixin, } from "vuelidate";
import {required, minLength, sameAs, email} from "vuelidate/lib/validators";

export default {
  components: {
    navbar,
  },
  data() {
    return {
      form: {
        name: '',
        email: null,
        password: '',
        repeatPassword: '',
      },
      visibility: 'password'
    };
  },
  validations: {
    form: {
      email: {
        email,
        required,
        minLength: minLength(3)
      },
      password :{
        required,
        minLength: minLength(8)
      },
      repeatPassword: {
        required,
        sameAsPassword: sameAs('password')
      },

    },
  },
  methods: {
    showPassword() {
      this.visibility = 'text';
    },
    hidePassword() {
      this.visibility = 'password';
    },
    pressed() {
      firebase
          .auth()
          .createUserWithEmailAndPassword(this.form.email, this.form.password)
          .then(() => {
            console.log("here");
            this.$router.replace({name: "bienvenue"});
          })
    },
    validateState (email) {
      const {$dirty, $error} = this.$v.form[email];
      return $dirty ? !$error : null;
    },

    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
    },
  },
  mixins: [validationMixin],
};
</script>

<style lang="scss" scoped>
.error {
  color: red;
  font-size: 18px;
}

.back {
  position: absolute;
  top: 50px;
  left: 50px;
}

.connexion {
  width: 100%;
}

img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.row {
  padding-right: 0px !important;
  padding-left: 0px !important;
}

.col-md-6:last-child {
  min-height: 100vh;
  padding: 0px;

}

.col-md-6:first-child {
  margin: auto;

}

.row, .col-md-6 {
  padding: 0;
  margin-right: 0px !important;
  margin-left: 0px !important;
}


</style>
