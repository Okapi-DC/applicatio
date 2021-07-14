<template>
  <div>
    {{ currentUserProfile.name }}
    {{ currentUserProfile.personality.personality }}
    {{ currentUserProfile.personality.creativity }}

    <img v-bind:src="currentUserProfile.photo.photo" alt="photo de profil"/>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'About',
  computed: {
    ...mapState(['currentUser', 'currentUserProfile'])
  }
}
</script>
