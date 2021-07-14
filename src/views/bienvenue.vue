<template>
  <div>
    <div class="app" id="step1" v-if="isStep1Visible">
      <div>
        <background01></background01>
        <div class="padding_top_80 d-inline-flex">
          <p class="animate__fadeIn animate__animated a2 animate__delay-2s circle_01">1</p>
          <p class="animate__fadeIn animate__animated a1 animate__delay-2s circle_02">2</p>
          <p class="animate__fadeIn animate__animated a1 animate__delay-2s circle_02">3</p>
          <p class="animate__fadeIn animate__animated a1 animate__delay-2s circle_02">4</p>
        </div>
      <h2 class="padding_top_30 color_01">Bienvenue {{ name }} !</h2>
      <p class="color_01">Vous pouvez toujours changer plus tard !</p>
      <div class="padding_top_30">
        <button class="btn_picture" @click="click1"><svg class="picture" width="40" height="36" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.6347 0.709335C27.802 1.17394 28.6274 2.01139 29.3673 3.23912L29.6111 3.66285L30.5155 5.39715L30.5453 5.44558L30.5723 5.48773L30.6491 5.59275C31.0612 6.04175 31.7508 6.313 32.206 6.313C36.3755 6.313 39.7811 9.58752 39.9899 13.7041L40 14.105V25.695C40 31.039 35.7796 35.4 30.4911 35.6258L30.06 35.635H9.94C4.59468 35.635 0.234941 31.4152 0.00918343 26.1261L0 25.695V14.105C0 9.80219 3.48996 6.313 7.794 6.313C8.24755 6.313 8.93816 6.04136 9.35088 5.59275L9.3651 5.57598L9.38289 5.55267L9.48575 5.39491L10.3876 3.6634C11.1915 2.20235 12.0661 1.22566 13.3638 0.709147C15.7418 -0.236414 24.2586 -0.236414 26.6347 0.709335ZM14.4727 3.49666C14.0299 3.6729 13.629 4.08083 13.2012 4.78801L13.016 5.10961L12.2463 6.5978L12.0569 6.94066C11.8987 7.20372 11.7405 7.42577 11.5599 7.62258C10.6391 8.6235 9.31693 9.20161 8.14164 9.29844L7.794 9.313L7.46581 9.32406C5.07995 9.48538 3.17242 11.3925 3.01106 13.777L3 14.105V25.695C3 29.3996 5.90348 32.427 9.55922 32.6247L9.94 32.635H30.06C33.7639 32.635 36.792 29.7303 36.9897 26.0757L37 25.695V14.105C37 11.5694 35.0285 9.49272 32.5342 9.32406L32.206 9.313L31.8578 9.29844C30.6807 9.20159 29.3586 8.62333 28.4389 7.62125C28.2606 7.42705 28.1033 7.20657 27.9461 6.94574L27.9083 6.88108L27.8633 6.80078L27.6311 6.36528L26.9833 5.11016C26.5459 4.31595 26.1453 3.83056 25.7128 3.58662L25.5253 3.49666L25.2866 3.41733C23.2283 2.83556 16.0688 2.86201 14.4727 3.49666ZM19.9994 12.3984C24.3398 12.3984 27.8574 15.916 27.8574 20.2564C27.8574 24.5968 24.3398 28.1144 19.9994 28.1144C15.659 28.1144 12.1414 24.5968 12.1414 20.2564C12.1414 15.916 15.659 12.3984 19.9994 12.3984ZM19.9994 15.3984C17.3158 15.3984 15.1414 17.5728 15.1414 20.2564C15.1414 22.94 17.3158 25.1144 19.9994 25.1144C22.683 25.1144 24.8574 22.94 24.8574 20.2564C24.8574 17.5728 22.683 15.3984 19.9994 15.3984ZM31.0086 11.0004C32.1132 11.0004 33.0086 11.8958 33.0086 13.0004C33.0086 14.0261 32.2365 14.8714 31.2418 14.9869L31.0086 15.0004C29.886 15.0004 28.9906 14.105 28.9906 13.0004C28.9906 11.9747 29.7627 11.1294 30.7574 11.0139L31.0086 11.0004Z" fill="white"/></svg>
          <div v-if="imageData!=null">
            <img class="preview" :src="img1">
          </div>
          <input class="btn_01" type="file" ref="input1" style="display: none" @change="previewImage" accept="image/*" >
        </button>
      </div>
<!--      <v-text-field solo v-model="caption" label="Caption goes here"></v-text-field>-->
      <b-form @submit.stop.prevent="onSubmit" class="padding_top_30">
        <div class="form width_30">
          <b-form-group>
            <label class="color_01 text-left">Nom complet</label>
            <b-form-input v-model="$v.name.$model" :state="validateState('name')" type="text" class="input_01" placeholder="Steve Jobs"></b-form-input>
            <b-form-invalid-feedback v-if="!$v.name.minLength">Il te faut au moins 3 caractères !</b-form-invalid-feedback>
            <b-form-invalid-feedback v-if="!$v.name.required">Prénom requis</b-form-invalid-feedback>
          </b-form-group>
          <div>
<!--                     <b-button to="/" class="btn_01 margin_top_30" type="submit">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                              </svg> Retour
                            </b-button>-->
            <b-button @click="nextStep" v-on:click="show = !show" class="btn_01 right margin_top_30" type="submit">Suivant
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </b-button>
          </div>
        </div>
      </b-form>
      </div>

    </div>

    <div id="step2" v-if="isStep2Visible">
      <background02></background02>
      <div class="padding_top_80 d-inline-flex">
        <p class="circle_03 animate__fadeIn animate__animated a2 animate__delay-2s">1</p>
        <p class="circle_03 animate__fadeIn animate__animated a2 animate__delay-2s">2</p>
        <p class="circle_04 animate__fadeIn animate__animated a1 animate__delay-2s">3</p>
        <p class="circle_04 animate__fadeIn animate__animated a1 animate__delay-2s">4</p>
      </div>
      <kinesis-container>
        <h2 class="padding_top_30 animate__animated animate__fadeInUp">Une opportunité pour déterminer votre profil {{ name }}!</h2>
        <p class="padding_top_30">Passez notre test qui définira les soft skills <br>sur lesquels vous êtes le plus avancé et ceux à travailler.</p>
        <b-container>
          <div class="al text-center">
            <div class="col-sm-2">
              <kinesis-element :strength="17" type="translate">
                <img class="" v-bind:src="require('@/assets/LICORNE.svg')" width="93%" alt="LICORNE">
              </kinesis-element>
              <kinesis-element :strength="15" type="translate">
                <h3>Licorne</h3>
              </kinesis-element>
            </div>
            <div class="col-sm-2">
              <kinesis-element :strength="17" type="translate">
                <img class="" v-bind:src="require('@/assets/Griffon.svg')" width="86%" alt="Griffon">
              </kinesis-element>
              <kinesis-element :strength="15" type="translate">
                <h3>Griffon</h3>
              </kinesis-element>
            </div>
            <div class="col-sm-2">
              <kinesis-element :strength="26" type="translate">
                <img class="" v-bind:src="require('@/assets/PHENIX.svg')" width="56%" alt="Phénix">
              </kinesis-element>
              <kinesis-element :strength="22" type="translate">
                <h3>Phénix</h3>
              </kinesis-element>
            </div>
            <div class="col-sm-2">
              <kinesis-element :strength="17" type="translate">
                <img class="" v-bind:src="require('@/assets/CENTAURE.svg')" width="72%" alt="Centaure">
              </kinesis-element>
              <kinesis-element :strength="17" type="translate">
                <h3>Centaure</h3>
              </kinesis-element>
            </div>
            <div class="col-sm-2">
              <kinesis-element :strength="40" type="translate">
                <img class="" v-bind:src="require('@/assets/KITSUNE.svg')" width="80%" alt="service-image">
              </kinesis-element>
              <kinesis-element :strength="17" type="translate">
                <h3>Kitsune</h3>
              </kinesis-element>
            </div>
          </div>
        </b-container>
        <div>
<!--          <b-button @click="previousStep" class="btn_02 left margin_top_30" type="submit">Précedant
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </b-button>-->
          <b-button @click="nextStep" class="btn_02 right margin_top_30" type="submit">Suivant
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </b-button>
        </div>
      </kinesis-container>
    </div>
    <div id="step3" v-if="isStep3Visible">
      <background02></background02>
      <div class="padding_top_80 d-inline-flex">
        <p class="circle_03 animate__fadeIn animate__animated a2 animate__delay-2s">1</p>
        <p class="circle_03 animate__fadeIn animate__animated a2 animate__delay-2s">2</p>
        <p class="circle_03 animate__fadeIn animate__animated a2 animate__delay-2s">3</p>
        <p class="circle_04 animate__fadeIn animate__animated a1 animate__delay-2s">4</p>
      </div>
      <h2 class="padding_top_30 animate__animated animate__fadeInUp">Nous nourrissons votre potentiel pour révéler vos super pouvoirs</h2>
      <p class="margin_top_30">Relevez chaque jour un nouveau défi pour développer vos soft skills</p>
      <img class="" v-bind:src="require('@/assets/super-power.svg')" width="30%%" alt="super-power">
  <div>
<!--    <b-button @click="previousStep" class="btn_02 left" type="submit">Précedant
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
      </svg>
    </b-button>-->
    <b-button @click="nextStep" class="btn_02 right" type="submit">Suivant
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
      </svg>
    </b-button>
  </div>
    </div>
    <div id="step4" v-if="isStep4Visible">
      <background01></background01>
      <div class="padding_top_80 d-inline-flex">
        <p class="circle_01 animate__fadeIn animate__animated a2 animate__delay-2s">1</p>
        <p class="circle_01 animate__fadeIn animate__animated a2 animate__delay-2s">2</p>
        <p class="circle_01 animate__fadeIn animate__animated a2 animate__delay-2s">3</p>
        <p class="circle_01 animate__fadeIn animate__animated a2 animate__delay-2s">4</p>
      </div>
      <div>
      <img class="" v-bind:src="require('@/assets/ welcome.svg')" width="30%" alt="service-image">
      <h2 class="margin_top_30 color_01 animate__animated animate__fadeInUp">Félicitations {{ name }} !</h2>
      <p class="color_01">Vous avez terminer votre onboarding... Il est temps pour vous d’améliorer votre expérience collaborateur !</p>
      <b-button to="/test" class="btn_03 margin_top_30" type="submit">Commencer le test
      </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import {minLength, required} from "vuelidate/lib/validators";
import firebase from 'firebase'
import {mapState, mapActions} from 'vuex'
import background01 from "@/components/background01";
import background02 from "@/components/background02";

export default {
  components:{
    background01,
    background02,
  },
  data() {
    return {
      name:'',
      deCount: 0,
      count: 1,
      isStep1Visible: true,
      isStep2Visible: false,
      isStep3Visible: false,
      isStep4Visible: false,
      show: true,
      isStep4Invisible: true,
      btnText: 'Suivant',
      caption: '',
      img1: '',
      imageData: null,
    };
  },
  validations: {
    name:{
      required,
      minLength: minLength(3)
    },
  },
  watch: {
    count(value) {
      if (value === 1) {
        this.isStep1Visible = true;
        this.isStep2Visible = false;
        this.isStep3Visible = false;
        this.isStep4Visible = false;
      }
      else if (value === 2) {
        this.isStep1Visible = false;
        this.isStep2Visible = true;
        this.isStep3Visible = false;
        this.isStep4Visible = false;
      }
      else if (value === 3) {
        this.isStep2Visible = false;
        this.isStep3Visible = true;
        this.isStep4Visible = false;
        this.isStep1Visible = false;
      }
      else if (value === 4) {
        this.isStep1Visible = false;
        this.isStep2Visible = false;
        this.isStep3Visible = false;
        this.isStep4Visible = true;
        /*        this.btnText = "Je veux mon estimation Gratuite"*/
      }
    },
    name(newName) {
      localStorage.name = newName;
    }
  },
  methods: {
    ...mapActions(['fetchUser']),
    nextStep() {
      this.$v.name.$touch();
      if (this.$v.name.$anyError) {
        return;
      }
      if (this.count < 4) {
        this.count++;
      }
      const post = {
        photo: this.img1,
        caption: this.caption
      }

      firebase.firestore().collection("users")
          .doc(this.currentUser.uid)
          .set({
            photo: post,
            name: this.name,
          }).then(() => {
        this.fetchUser()
        /*         this.steps.activeStep = 1*/
        /* this.registerError = ''*/
      }).catch(() => {
        /*        this.registerError = error.code;*/
      })
    },
    previousStep() {
      if (this.count > 0) {
        this.count--;
      }
    },
    /*    create () {
          const post = {
            photo: this.img1,
            caption: this.caption
          }
          firebase.database().ref('PhotoGallery').push(post)
              .then((response) => {
                console.log(response)
              })
              .catch(err => {
                console.log(err)
              })
        },*/
    click1() {
      this.$refs.input1.click()
    },
    previewImage(event) {
      this.uploadValue=0;
      this.img1=null;
      this.imageData = event.target.files[0];
      this.onUpload()
    },
    onUpload(){
      this.img1=null;
      const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
      storageRef.on(`state_changed`,snapshot=>{
            this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
          }, error=>{console.log(error.message)},
          ()=>{this.uploadValue=100;
            storageRef.snapshot.ref.getDownloadURL().then((url)=>{
              this.img1 =url;
              console.log(this.img1)
            });
          }
      );
    },
    validateState() {
      const {$dirty, $error} = this.$v.name;
      return $dirty ? !$error : null;
    },
    onSubmit() {
      this.$v.name.$touch();
      if (this.$v.name.$anyError) {
        return;
      }
    },
    updateMessage (e) {
      this.$store.commit('updateMessage', e.target.value)
    },
  },
  mounted() {
    if(localStorage.name) this.name = localStorage.name;
  },

  computed: {
    ...mapState(['currentUser']),
    /*    name: {
          get () {
            return this.$store.state.name
          },
          set (value) {
            this.$store.commit('updateMessage', value)
          }
        }*/
  },
};
</script>

<style>
:root {
  --animate-delay: 0,5s;
}


#blockLeft {
  background-color: #082b37;
  color: #fff;
  height: 750px;
}
#blockRight {
  background-color: #fff;
  height: 750px;
}
#badge {
  background: #05d8c6;
  color: white;
  text-transform: uppercase;
  width: 180px;
  height: 76px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-full {
  background-color: #ff580c;
  color: #fff;
  border-radius: 60px;
}
input,
select {
  border: none !important;
}

/*.picture{
  margin-top: 30px;
  margin-left: -19px;
  position: fixed;
}*/
.background_01{
  min-height: 100vh;
}

h2,p{
  color: #3B0E67;
}
h2{
  font-size: 32px;
}
p{
  font-size: 16px;
}
.input_01{
  width: 100%;
  margin-top: 160px;
  margin: auto;
}

.al{
  display: flex;
  justify-content: center;
}
.btn_picture {
  height: 110px;
  width: 110px;
  background-color: #5ECFC4;
  border-radius: 60%;
  border: none;
}

.preview{
  margin-top: 30px;
  width: 110px;
  height: 110px;
  -moz-border-radius: 110px;
  -webkit-border-radius: 110px;
  object-fit: cover;
  margin-top: -37px;
  margin-left: 0px;
}
.right{
  right: 110px;
  position: absolute;
}
.left{
  left: 110px;
  position: absolute;
}

h3{
  font-size: 26px;
}

.animate__animated.animate__fadeIn.a1 {
  --animate-duration: 4s;
}
.animate__animated.animate__fadeIn.a2 {
  --animate-duration: 2.5s;
}
.animate__animated.animate__fadeIn.a3 {
  --animate-duration: 3s;
}
.animate__animated.animate__fadeIn.a4 {
  --animate-duration: 3s;
}
</style>
