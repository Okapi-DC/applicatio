<template>
  <div>
  <a to="/"><img alt="Logo" src="@/assets/logo.png" width="70"></a>
  <h2 class="margin_top_30">Regarder vos compétences monter en flèche !</h2>
  <b-navbar toggleable="lg" variant="white" bg-primary class="container">

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="text-lg-end">
        <b-nav-item to="/" exact-active-class=" active">Connexion</b-nav-item>
        <b-nav-item to="/Inscription" exact-active-class=" active">Inscription</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
</template>

<script>
export default {
name: "header-log"
}
</script>

<style scoped>
.active{
  color: #3B0E67!important;
  border-bottom: 2px solid #3B0E67;
}
</style>
