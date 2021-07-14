<template>
  <div class="background_01 app">
    <img class="photo-gris" v-bind:src="require('@/assets/pattern.svg')" width="100%" alt="service-image">
  </div>
</template>

<script>

</script>

<style scoped>
div{
  position: absolute;
  z-index: -1;
}
img{
  position: absolute;
  bottom: 0px;
  left: 0;
  opacity: 12%;
}
</style>
