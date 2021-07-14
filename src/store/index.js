import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from "firebase/app";
import "firebase/auth";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {},
    currentUserProfile: {},
    loggedIn: false,
    currentScore:{},
    name:{},
  },

  mutations: {
    SET_CURRENT_USER (state, user) {
      return state.currentUser = user
    },
    SET_CURRENT_SCORE (state, score) {
      return state.currentUser = score
    },
    SET_CURRENT_USER_PROFILE (state, profile) {
      return state.currentUserProfile = profile
    },
    SET_LOGGED_IN(state, loggedIn) {
      return state.loggedIn = loggedIn
    },
    updateMessage(state, message) {
      state.name = message
    },
  },

  actions: {
    retrieveMessage (context, userObject) {
      context.commit('updateMessage', userObject)
    },
    fetchUser(context) {
      // Check for auth
      const user = firebase.auth().currentUser
      if (user) {
        firebase.firestore().collection('users')
            .doc(user.uid)
            .onSnapshot((doc) => {
              if (doc.exists) {
                context.commit('SET_CURRENT_USER_PROFILE', doc.data())
              }
            })
        context.commit('SET_CURRENT_USER', user)
        context.commit('SET_LOGGED_IN', true)
      } else {
        context.commit('SET_LOGGED_IN', false)
      }
    },
    fetchScore(context){
      const score = firebase.auth().currentUser
      if (score) {
        firebase.firestore().collection('users')
            .doc(score.uid)
            .onSnapshot((doc) => {
              if (doc.exists) {
                context.commit('SET_CURRENT_SCORE', doc.data())
              }
            })
        context.commit('SET_CURRENT_USER', score)
        context.commit('SET_LOGGED_IN', true)
      } else {
        context.commit('SET_LOGGED_IN', false)
      }

    }
  },
  modules: {
  }
})
