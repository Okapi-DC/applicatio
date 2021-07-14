<template>
<div class="box_cart">
  <div>
  <div style="display: flex; justify-content: space-between;">
    <div>
      <h2 class="font_dash_whith">{{ currentUserProfile.name }}</h2>
    </div>
    <div class="">
      <h3 class="title-border">{{ currentUserProfile.personality.personality }}</h3>
    </div>
  </div>

  <div style="display: flex; justify-content: space-between;">
    <div>
      <img class="pdf" v-bind:src="currentUserProfile.photo.photo" alt="photo de profil"/>
    </div>
    <div>

    </div>
  </div>
  </div>
</div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "cart",
  computed: {
    ...mapState(['currentUser', 'currentUserProfile'])
  }
}
</script>

<style scoped>
.pdf{
  width: 190px;
  height: 190px;
  -moz-border-radius: 190px;
  -webkit-border-radius: 190px;
  object-fit: cover;
  border: 20px solid #9EE0DD;
}

.box_cart{
  margin-top: 110px;
  background: #5ECFC4;
  -webkit-box-shadow: 0px 0px 10px rgb(0 0 0 / 25%);
  box-shadow: 0px 0px 10px rgb(0 0 0 / 25%);
  border-radius: 13px;
  padding: 40px;
  margin: 130px;
}

h3{
  font-weight: bold;

}
</style>
