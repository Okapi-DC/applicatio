<template>
  <div class="box_05">
    <div class="width_50">
      <h2 class="color_02 title_dash_prima">Vos Soft skill</h2>

      <p class="color_01 font_dash_prima">Créativité</p>
      <b-progress id="01" :value="currentUserProfile.personality.creativity" show-progress class="mb-3"></b-progress>

      <p class="color_01 font_dash_prima">Empathie</p>
      <b-progress :value="currentUserProfile.personality.empathy" show-progress class="mb-3"></b-progress>

      <p class="color_01 font_dash_prima">Confiance</p>
      <b-progress :value="currentUserProfile.personality.trust" show-progress class="mb-3"></b-progress>

      <p class="color_01 font_dash_prima">Curiosité</p>
      <b-progress :value="currentUserProfile.personality.curiosity" show-progress class="mb-3"></b-progress>

      <p class="color_01 font_dash_prima">Gestion du stress</p>
      <b-progress :value="currentUserProfile.personality.stress" show-progress class="mb-3"></b-progress>
    </div>
    <div class="width_50">
      <p class="color_01 font_dash_prima">Gestion du temps</p>
      <b-progress :value="currentUserProfile.personality.timeManagement" show-progress class="mb-3"></b-progress>
      <p class="color_01 font_dash_prima">Sens du collectif</p>
      <b-progress :value="currentUserProfile.personality.senseCollective" show-progress class="mb-3"></b-progress>
      <p class="color_01 font_dash_prima">Intelligence émotionnelle</p>
      <b-progress :value="currentUserProfile.personality.emotional" show-progress class="mb-3"></b-progress>
      <p class="color_01 font_dash_prima">Adaptabilité</p>
      <b-progress :value="currentUserProfile.personality.adaptability" show-progress class="mb-3"></b-progress>
      <p class="color_01 font_dash_prima">Résolution des problèmes</p>
      <b-progress :value="currentUserProfile.personality.resolution" show-progress class="mb-3"></b-progress>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
name: "softskills",
  data() {
    return {
      max: 100,
      animate: true
    }
  },
  computed: {
    ...mapState(['currentUser', 'currentUserProfile'])
  }
}


</script>

<style scoped>
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

.width_50{
  width: 50%;
  padding: 15px;
}
.width_50:last-child{
  margin-top: 30px;
}
p{
  margin-bottom: 0rem;
}
.progress-bar {
  background-color: #3B0E67 !important;
}
</style>
