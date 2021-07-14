<template>
  <div class="background_03">
    <navbarapp></navbarapp>
    <headerapp></headerapp>
      <b-container>
        <div class="row">
          <div class="col-md-6">
            <div class="box_01">
            <h2 class="title_dash_prima">Les défis de la semaine</h2>
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
                  <div><img class="" v-bind:src="require('@/assets/SOCIABILITE.svg')" width="100%" alt="image user"></div>
                    <div class="text_button">
                      <p class="title_defis">Défi sens du collectif</p>
                      <p class="font_dash_prima">Après le boulot</p>
                    </div>
                  <div class="icon">
                    <p class="btn_defis" v-on:click="iconvisible2 = !iconvisible2">
                      <span v-if="!iconvisible2"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5"><circle cx="14" cy="14" r="14" fill="#5A4C84"/><line x1="14.5" y1="7.5" x2="14.5" y2="15.5" stroke="white" stroke-linecap="round"/><line x1="14.4551" y1="15.7071" x2="11.1622" y2="19" stroke="white" stroke-linecap="round"/></g></svg></span>
                      <span v-else><svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.3881 0.633311C24.204 1.47772 24.204 2.84377 23.3881 3.68819L10.1734 17.366C9.76692 17.7896 9.23232 18 8.69772 18C8.1659 18 7.62851 17.7896 7.22199 17.366L0.611868 10.5271C-0.203956 9.68266 -0.203956 8.31662 0.611868 7.4722C1.42769 6.62779 2.74749 6.62779 3.56331 7.4722L8.69772 12.7808L20.4367 0.633311C21.2525 -0.211104 22.5723 -0.211104 23.3881 0.633311Z" fill="#5ECFC4"/></svg></span>
                    </p>
                  </div>
                </button>
                <b-collapse id="collapse-4" v-model="visible2" class="mt-2">
                  <b-card class="font_dash_prima">Proposez à un ou plusieurs de vos collègues d’aller prendre un verre ou un café après le travail.</b-card>
                </b-collapse>
              </div>



              <div>
                <div class="border-bottom"></div>
                <button class="btn_faq" :class="visible3 ? null : 'collapsed'" :aria-expanded="visible3 ? 'true' : 'false'" aria-controls="collapse-4" @click="visible3 = !visible3">
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
                <b-collapse id="collapse-4" v-model="visible3" class="mt-2">
                  <b-card class="font_dash_prima">Proposer à l’équipe concernée une idée de publication de post pour les réseaux sociaux de l’entreprise.</b-card>
                </b-collapse>
              </div>



              <div>
                <div class="border-bottom"></div>
                <button class="btn_faq" :class="visible4 ? null : 'collapsed'" :aria-expanded="visible4 ? 'true' : 'false'" aria-controls="collapse-4" @click="visible4 = !visible4">
                  <div><img class="" v-bind:src="require('@/assets/defi01.svg')" width="100%" alt="image user"></div>
                  <div class="text_button">
                    <p class="title_defis">Défi empathie</p>
                    <p class="font_dash_prima">Dernière réu</p>
                  </div>
                  <div class="icon">
                    <p class="btn_defis" v-on:click="iconvisible4 = !iconvisible4">
                      <span v-if="!iconvisible4"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5"><circle cx="14" cy="14" r="14" fill="#5A4C84"/><line x1="14.5" y1="7.5" x2="14.5" y2="15.5" stroke="white" stroke-linecap="round"/><line x1="14.4551" y1="15.7071" x2="11.1622" y2="19" stroke="white" stroke-linecap="round"/></g></svg></span>
                      <span v-else><svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.3881 0.633311C24.204 1.47772 24.204 2.84377 23.3881 3.68819L10.1734 17.366C9.76692 17.7896 9.23232 18 8.69772 18C8.1659 18 7.62851 17.7896 7.22199 17.366L0.611868 10.5271C-0.203956 9.68266 -0.203956 8.31662 0.611868 7.4722C1.42769 6.62779 2.74749 6.62779 3.56331 7.4722L8.69772 12.7808L20.4367 0.633311C21.2525 -0.211104 22.5723 -0.211104 23.3881 0.633311Z" fill="#5ECFC4"/></svg></span>
                    </p>
                  </div>
                </button>
                <b-collapse id="collapse-4" v-model="visible4" class="mt-2">
                  <b-card class="font_dash_prima">Demander à l’un de vos collègue quel a été son ressenti par rapport au déroulé de la dernière réunion que vous avez fait ensemble.</b-card>
                </b-collapse>
              </div>


              <div>
                <div class="border-bottom"></div>
                <button class="btn_faq" :class="visible5 ? null : 'collapsed'" :aria-expanded="visible5 ? 'true' : 'false'" aria-controls="collapse-4" @click="visible5 = !visible5">
                  <div><img class="" v-bind:src="require('@/assets/SOCIABILITE.svg')" width="100%" alt="image user"></div>
                  <div class="text_button">
                    <p class="title_defis">Défi intelligence émotionnelle</p>
                    <p class="font_dash_prima">Mettre à l’écrit</p>
                  </div>
                  <div class="icon">
                    <p class="btn_defis" v-on:click="iconvisible5 = !iconvisible5">
                      <span v-if="!iconvisible5"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5"><circle cx="14" cy="14" r="14" fill="#5A4C84"/><line x1="14.5" y1="7.5" x2="14.5" y2="15.5" stroke="white" stroke-linecap="round"/><line x1="14.4551" y1="15.7071" x2="11.1622" y2="19" stroke="white" stroke-linecap="round"/></g></svg></span>
                      <span v-else><svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.3881 0.633311C24.204 1.47772 24.204 2.84377 23.3881 3.68819L10.1734 17.366C9.76692 17.7896 9.23232 18 8.69772 18C8.1659 18 7.62851 17.7896 7.22199 17.366L0.611868 10.5271C-0.203956 9.68266 -0.203956 8.31662 0.611868 7.4722C1.42769 6.62779 2.74749 6.62779 3.56331 7.4722L8.69772 12.7808L20.4367 0.633311C21.2525 -0.211104 22.5723 -0.211104 23.3881 0.633311Z" fill="#5ECFC4"/></svg></span>
                    </p>
                  </div>
                </button>
                <b-collapse id="collapse-4" v-model="visible5" class="mt-2">
                  <b-card class="font_dash_prima">Lister sur une feuille les 3 principales qualités que vous pensez que les autres percoivent chez vous.</b-card>
                </b-collapse>
              </div>


              <div>
                <div class="border-bottom"></div>
                <button class="btn_faq" :class="visible6 ? null : 'collapsed'" :aria-expanded="visible6 ? 'true' : 'false'" aria-controls="collapse-4" @click="visible6 = !visible6">
                  <div><img class="" v-bind:src="require('@/assets/CREATIVITE.svg')" width="100%" alt="image user"></div>
                  <div class="text_button">
                    <p class="title_defis">Défi gestion du stress</p>
                    <p class="font_dash_prima">Répéter</p>
                  </div>
                  <div class="icon">
                    <p class="btn_defis" v-on:click="iconvisible6 = !iconvisible6">
                      <span v-if="!iconvisible6"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5"><circle cx="14" cy="14" r="14" fill="#5A4C84"/><line x1="14.5" y1="7.5" x2="14.5" y2="15.5" stroke="white" stroke-linecap="round"/><line x1="14.4551" y1="15.7071" x2="11.1622" y2="19" stroke="white" stroke-linecap="round"/></g></svg></span>
                      <span v-else><svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.3881 0.633311C24.204 1.47772 24.204 2.84377 23.3881 3.68819L10.1734 17.366C9.76692 17.7896 9.23232 18 8.69772 18C8.1659 18 7.62851 17.7896 7.22199 17.366L0.611868 10.5271C-0.203956 9.68266 -0.203956 8.31662 0.611868 7.4722C1.42769 6.62779 2.74749 6.62779 3.56331 7.4722L8.69772 12.7808L20.4367 0.633311C21.2525 -0.211104 22.5723 -0.211104 23.3881 0.633311Z" fill="#5ECFC4"/></svg></span>
                    </p>
                  </div>
                </button>
                <b-collapse id="collapse-4" v-model="visible6" class="mt-2">
                  <b-card class="font_dash_prima">Pour la prochaine fois que vous devez faire une présentation, répétez la au moins 3 fois auprès de l’un de vos collègue.</b-card>
                </b-collapse>
              </div>

              <div>
                <div class="border-bottom"></div>
                <button class="btn_faq" :class="visible7 ? null : 'collapsed'" :aria-expanded="visible7 ? 'true' : 'false'" aria-controls="collapse-4" @click="visible7 = !visible7">
                  <div><img class="" v-bind:src="require('@/assets/defi01.svg')" width="100%" alt="image user"></div>
                  <div class="text_button">
                    <p class="title_defis">Défi confiance</p>
                    <p class="font_dash_prima">Dire non</p>
                  </div>
                  <div class="icon">
                    <p class="btn_defis" v-on:click="iconvisible7 = !iconvisible7">
                      <span v-if="!iconvisible7"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5"><circle cx="14" cy="14" r="14" fill="#5A4C84"/><line x1="14.5" y1="7.5" x2="14.5" y2="15.5" stroke="white" stroke-linecap="round"/><line x1="14.4551" y1="15.7071" x2="11.1622" y2="19" stroke="white" stroke-linecap="round"/></g></svg></span>
                      <span v-else><svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.3881 0.633311C24.204 1.47772 24.204 2.84377 23.3881 3.68819L10.1734 17.366C9.76692 17.7896 9.23232 18 8.69772 18C8.1659 18 7.62851 17.7896 7.22199 17.366L0.611868 10.5271C-0.203956 9.68266 -0.203956 8.31662 0.611868 7.4722C1.42769 6.62779 2.74749 6.62779 3.56331 7.4722L8.69772 12.7808L20.4367 0.633311C21.2525 -0.211104 22.5723 -0.211104 23.3881 0.633311Z" fill="#5ECFC4"/></svg></span>
                    </p>
                  </div>
                </button>
                <b-collapse id="collapse-4" v-model="visible7" class="mt-2">
                  <b-card class="font_dash_prima">La prochaine fois que l’un de vos collègues vous demande un service alors que vous n’avez pas suffisament de temps, répondez lui que vous ne pouvez pas en lui expliquant factuellement et dans la bienveillance.</b-card>
                </b-collapse>
              </div>

            </div>




          </div>

        <div class="col-md-5">
          <div>
          <softskills></softskills>
          </div>
        </div>

        </div>
      </b-container>
  </div>
</template>

<script>
import Navbarapp from "@/components/layout/navbarapp";
import Headerapp from "@/components/app/headerapp";
import Softskills from "@/components/app/softskills";
export default {
name: "defis",
  components: {Softskills, Headerapp, Navbarapp},
  data() {
    return {
      visible: false,
      visible0: false,
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      visible5: false,
      visible6: false,
      visible7: false,
    }
  }
}
</script>

<style scoped>
.box_01{
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  text-align: left;
  box-shadow: 0px 0px 7px #e2e2e2;
  margin-left: 50px;
  display: flex;
  height: -webkit-fill-available;
  flex-direction: column;
}

.text_button{
  margin-top: 7px;
  margin-left: 7px;
  width: 380px;
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

.title_defis{
  font-size: 17px;
  font-weight: bold;
  color: #3B0E67;
}
</style>
