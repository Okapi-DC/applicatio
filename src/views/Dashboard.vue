<template>
  <div class="background_03">
    <navbarapp></navbarapp>
    <headerapp></headerapp>
    <b-container>
      <div class="row">
        <div class="col-md-6 box_01">
          <div class="text-left">
            <h2 class="color_02 title_dash_prima">Hello {{ currentUserProfile.name }}</h2>
            <p class="font_dash_prima">Nous sommes heureux de vous voir !<br>Vous avez déjà validé <span class="color_02">{{ 2 }}</span> défis !</p>
          </div>
          <div>
            <img class="img_user" v-bind:src="require('@/assets/user.svg')" width="" alt="image user">
          </div>
        </div>
        <div class="col-md-5 box_02">
          <div class="width_50">
            <p class="color_01 font_dash_whith">Tester vos soft skills et déterminer la créature fantastique qui sommeille en vous !</p>
            <p class="color_01 font_dash_whith">Durée moyenne : 10min.</p>
            <p class="color_01"><small>Repasser le test ne changera pas vos statistiques.</small></p>
          </div>
          <div>
            <img class="" v-bind:src="require('@/assets/test.svg')" width="100%" alt="image user">
            <div>
            <button class="btn_01" to="/">Repasser le test</button>
            </div>
          </div>
      </div>
      </div>
      <div class="row padding_top_30 grapic">
        <div class="col-md-6 box_03">
          <h2 class="title_dash_prima">Votre météo</h2>
          <graphic></graphic>
        </div>
        <div class="col-md-5">
          <softskills></softskills>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 box_04">
          <h2 class="title_dash_prima">Les défis de la semaine</h2>
          <div>
            <div>
              <div class="border-bottom"></div>
              <button class="btn_faq" :class="visible1 ? null : 'collapsed'" :aria-expanded="visible1 ? 'true' : 'false'" aria-controls="collapse-4" @click="visible1 = !visible1">
                <div>
                  <img class="" v-bind:src="require('@/assets/CURIOSITE.svg')" width="100%" alt="image user">
                </div>
                <div class="text_button">
                  <p class="title_defis">Défi curiosité</p>
                  <p class="font_dash_prima">Les autres services</p>
                </div>
                <div class="icon">
                  <p class="btn_defis" v-on:click="visible = !visible">
                    <span v-if="!visible"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5"><circle cx="14" cy="14" r="14" fill="#5A4C84"/><line x1="14.5" y1="7.5" x2="14.5" y2="15.5" stroke="white" stroke-linecap="round"/><line x1="14.4551" y1="15.7071" x2="11.1622" y2="19" stroke="white" stroke-linecap="round"/></g></svg></span>
                    <span v-else><svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.3881 0.633311C24.204 1.47772 24.204 2.84377 23.3881 3.68819L10.1734 17.366C9.76692 17.7896 9.23232 18 8.69772 18C8.1659 18 7.62851 17.7896 7.22199 17.366L0.611868 10.5271C-0.203956 9.68266 -0.203956 8.31662 0.611868 7.4722C1.42769 6.62779 2.74749 6.62779 3.56331 7.4722L8.69772 12.7808L20.4367 0.633311C21.2525 -0.211104 22.5723 -0.211104 23.3881 0.633311Z" fill="#5ECFC4"/></svg></span>
                  </p>
                </div>
              </button>
              <b-collapse id="collapse-4" v-model="visible1" class="mt-2">
                <b-card class="font_dash_prima">Lisez les documents utilisés par d’autres services que le votre qui leur sert de bases quotidiennement au travail (ex : charte graphique) </b-card>
              </b-collapse>
            </div>

            <div>
              <div class="border-bottom"></div>
              <button class="btn_faq" :class="visible2 ? null : 'collapsed'" :aria-expanded="visible2 ? 'true' : 'false'" aria-controls="collapse-4" @click="visible2 = !visible2">
                <div><img class="" v-bind:src="require('@/assets/CREATIVITE.svg')" width="100%" alt="image user"></div>
                <div class="text_button">
                  <p class="title_defis">Défi créativité</p>
                  <p class="font_dash_prima">Réseaux sociaux</p>
                </div>
                <div class="icon">
                  <p class="btn_defis" v-on:click="iconvisible3 = !iconvisible3">
                    <span v-if="!iconvisible3"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5"><circle cx="14" cy="14" r="14" fill="#5A4C84"/><line x1="14.5" y1="7.5" x2="14.5" y2="15.5" stroke="white" stroke-linecap="round"/><line x1="14.4551" y1="15.7071" x2="11.1622" y2="19" stroke="white" stroke-linecap="round"/></g></svg></span>
                    <span v-else><svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.3881 0.633311C24.204 1.47772 24.204 2.84377 23.3881 3.68819L10.1734 17.366C9.76692 17.7896 9.23232 18 8.69772 18C8.1659 18 7.62851 17.7896 7.22199 17.366L0.611868 10.5271C-0.203956 9.68266 -0.203956 8.31662 0.611868 7.4722C1.42769 6.62779 2.74749 6.62779 3.56331 7.4722L8.69772 12.7808L20.4367 0.633311C21.2525 -0.211104 22.5723 -0.211104 23.3881 0.633311Z" fill="#5ECFC4"/></svg></span>
                  </p>
                </div>
              </button>
              <b-collapse id="collapse-4" v-model="visible2" class="mt-2">
                <b-card class="font_dash_prima">Proposer à l’équipe concernée une idée de publication de post pour les réseaux sociaux de l’entreprise.</b-card>
              </b-collapse>
            </div>
          </div>
        </div>
      </div>
    </b-container>
    <div>
    </div>
<!--      <h5 class="secret" v-for="secret in secrets" :key="secret.char_id">{{secret.name}}</h5>
      <h4>La c'est le dash</h4>-->
<!--  <navbarapp></navbarapp>
    <welcome></welcome>-->
<!--    <abc></abc>-->

<!--    <h1>{{ quiz.title }}</h1>-->
    <!-- index est utilisé pour être comparé à la question en cours -->
<!--
    <div v-bind:key="(question, index) in quiz.questions">
      &lt;!&ndash; Toutes les question sont cachées, on indique seulement &ndash;&gt;
      &lt;!&ndash; celle dont l'index === à la question en cours &ndash;&gt;
      <div v-show="index === questionIndex">
        <h2>{{ question.text }}</h2>
        <ol>
          <li v-bind:key="response in question.responses">
            <label>
              <input type="radio"> {{response.text}}
            </label>
          </li>
        </ol>
        &lt;!&ndash; Les deux boutons de navigation &ndash;&gt;
        &lt;!&ndash; Note: prev est caché à la première question &ndash;&gt;
        <button v-if="questionIndex > 0" v-on:click="prev">
          prev
        </button>
        <button v-on:click="next">
          next
        </button>
      </div>
    </div>
-->
  </div>
</template>

<script>
import "firebase/auth";
import Navbarapp from "@/components/layout/navbarapp";
import {mapState} from "vuex";
import Headerapp from "@/components/app/headerapp";
import Graphic from "@/components/app/graphic";
import Softskills from "@/components/app/softskills";

export default {
  components: {
    Softskills,
    Graphic,
    Headerapp,
    Navbarapp,
  },
  data() {
    return {
      values: [15, 30, 20],
      value: 45,
      max: 100,
      visible0: false,
      visible1: false,
      visible2: false,
    }
  },
  methods:{

  },
  computed: {
    ...mapState(['currentUser', 'currentUserProfile'])
  }
};
</script>

<style lang="scss" scoped>
div {
  color: inherit;
}
div.col-md-6.box_04{
  margin-top: -280px;
}
.pdf{
  width: 60px;
  height: 60px;
  -moz-border-radius: 60px;
  -webkit-border-radius: 60px;
  object-fit: cover;
  margin-left: 12px;
}
.row{
  justify-content: space-between;
}
.right{
  display: flex;
  align-items: flex-end;
  align-content: stretch;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-end;
}
.left{
  left: 110px;
  position: absolute;
}
.box_01{
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  text-align: left;
  box-shadow: 0px 0px 7px #e2e2e2;
  margin-left: 50px;
  display: flex;
  height: -webkit-fill-available;
}
.box_02{
  padding: 20px;
  background-color: #3B0E67;
  border-radius: 20px;
  text-align: left;
  box-shadow: 0px 0px 7px #e2e2e2;
  margin-left: 50px;
  display: flex;

  flex-wrap: nowrap;
  align-items: center;
}
.box_03{
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  text-align: left;
  box-shadow: 0px 0px 7px #e2e2e2;
  margin-left: 50px;
  display: flex;
  height: -webkit-fill-available;
  margin-top: -140px;
  flex-direction: column;
}
.box_04{
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  text-align: left;
  box-shadow: 0px 0px 7px #e2e2e2;
  margin-left: 50px;
  display: flex;
  height: -webkit-fill-available;
  margin-top: 10px;
  flex-direction: column;
  margin-bottom: 30px;
}
.box_05{
  padding: 20px;
  background-color: #ffffff;
  border-radius: 20px;
  text-align: left;
  box-shadow: 0px 0px 7px #e2e2e2;

  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}
.img_user{
  margin-left: 80px;
}
.flex_01{
  display: flex;
}
.card {
  border: 0px;
}
.card-body{
  padding-top: 20px;
}
.btn_faq{
  display: flex;
  border-top: 2px solid #3B0E67;
  text-align: left;
  background: none;
  border: none;
  color: #3B0E67;
  font-weight: bold;
  font-size: 20px;
}
.btn_faq:hover {
  color: #3B0E67;
  background-color: transparent;
}
.btn_faq:focus {
  outline: white!important;
  box-shadow: none!important;
}
.icon{

}

p{
  margin-bottom:0rem
}
.btn_faq:active{
  color: #3B0E67!important;
  background-color: white!important;
}
.card-body[data-v-e00a8a76] {
  padding-top: 0px;
}
.border-bottom{
  margin: 20px;
}
.btn_defis{

}

.text_button{
  margin-top: 7px;
  margin-left: 7px;
  width: 380px;
}

.title_defis{
  font-size: 17px;
  font-weight: bold;
  color: #3B0E67;
}

</style>
