<template>
  <b-container>
    <div class="row padding_top_30 padding_bottom_30">
      <div class="col-md-8">
        <h2 class="title_dash_second">Dashboard</h2>
        <input class="input_search" placeholder="Recherche">
        <button class="badge" to="/">
          <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.3" d="M10.0695 22C11.7297 22 13.1184 20.8165 13.4373 19.25H6.70166C7.02074 20.8165 8.4095 22 10.0695 22Z" fill="#433373"/>
            <path opacity="0.3" d="M16.4972 10.9998C16.4935 10.9998 16.4898 11.0006 16.4861 11.0006C12.9488 11.0006 10.0695 8.12219 10.0695 4.58398C10.0695 3.61131 10.2933 2.69185 10.6828 1.86504C10.4811 1.8459 10.2766 1.83398 10.0695 1.83398C6.52578 1.83398 3.65291 4.70668 3.65291 8.2506V10.8062C3.65291 12.6203 2.85816 14.3327 1.46386 15.5115C0.999091 15.9084 0.792807 16.5409 0.959647 17.1579C1.15401 17.8756 1.8635 18.334 2.6079 18.334H17.5266C18.3076 18.334 19.0438 17.8279 19.2022 17.0625C19.3251 16.4704 19.1143 15.8791 18.655 15.4932C17.3222 14.3758 16.5513 12.7339 16.4972 10.9998Z" fill="#433373"/>
            <path d="M21 4.50008C21 6.98537 18.9854 9 16.4999 9C14.0146 9 12 6.98537 12 4.50008C12 2.0148 14.0146 0 16.4999 0C18.9854 0 21 2.0148 21 4.50008Z" fill="#433373"/>
          </svg>
        </button>
      </div>
      <div class="col-md-4 right">
        <p class="font_dash_prima">{{ currentUserProfile.name }}</p>
        <b-avatar class="pdf" v-bind:src="currentUserProfile.photo.photo" width="10%" alt="photo de profil"/>
      </div>
    </div>

<!--    <div class="row">
      <div class="col-md-8">

      </div>
      <div class="col-md-4">

      </div>
    </div>-->
  </b-container>
</template>

<script>
import "firebase/auth";
import {mapState} from "vuex";


export default {
  computed: {
    ...mapState(['currentUser', 'currentUserProfile'])
  }
};
</script>

<style scoped>
.pdf{
  width: 40px;
  height: 40px;
  -moz-border-radius: 40px;
  -webkit-border-radius: 40px;
  object-fit: cover;
  margin-left: 12px;
}

.right{
  display: flex;
  align-items: flex-end;
  align-content: stretch;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-end;
}

.font_dash_prima:first-child{
  margin-bottom: 8px;
}
.box_01{
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  text-align: left;
  box-shadow: 0px 0px 7px #e2e2e2;
  margin-left: 40px;
  display: flex;
}

.input_search{
  background-color: white;
  height: 32px;
  width: 150px;
  border-radius: 8px;
  margin-left: 20px;
  font-size: 12px;
  padding-left: 20px;
}
.col-md-8{
  display: flex;
  margin-left: 40px;
  margin-bottom: 5px;
}

.badge{
  margin-left: 20px;
  margin-top: -14px;
}
</style>
