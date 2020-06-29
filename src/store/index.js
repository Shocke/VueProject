import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null,
    serials: "",
    role: localStorage.getItem('role'),
  },

  getters: {
    loggedIn(state) {
      return state.token !== null
    },
    isaAdmin(state){
      return state.role;
    }

  },

  mutations: {
    retrieveToken(state, token) {
      state.token = token
    },

    destroyToken(state) {
      state.token = null
    },

    retrieveRole(state, role){
      state.role = role
    }
  },

  actions: {
    retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:8080/SerialsTrelin/Login', {
          username: credentials.username,
          password: credentials.password,
        })
          .then(response => {
            console.log(response.data.token)
            var token = response.data.token
            var role = response.data.user.role
            if (token == null || token == "null") {
              reject("NULL")
            } else {
              localStorage.setItem('access_token', token)
              localStorage.setItem('username', credentials.username)
              localStorage.setItem('role', role)
              context.commit('retrieveToken', token)
              context.commit('retrieveRole', role)
              window.location.href = '#/Serials';
              alert("Вы успешно вошли.")
              resolve(response)
            }
          })
          .catch(error => {
            alert(error)
            reject(error)
          })
      })
    },

	
    registration(context, credentials) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:8080/SerialsTrelin/Registration', {
          username: credentials.username,
          password: credentials.password,
          email: credentials.email
        })
          .then(response => {
              alert("Регистрация успешна.")
              resolve(response)
          })
          .catch(error => {
            alert(error)
            reject(error)
          })
      })
    },

    AddSerial(context, credentials) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:8080/SerialsTrelin/AddSerial', {
          name: credentials.name,
          description: credentials.description,
          imageUrl: credentials.imageUrl,
          rating: credentials.rating
        })
          .then(response => {
              alert("Добавление успешно.")
              resolve(response)
          })
          .catch(error => {
            alert(error)
            reject(error)
          })
      })
    },

    getSerials() {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:8080/SerialsTrelin/Serials')
          .then(response => {
              resolve(response)
          })
          .catch(error => {
            alert(error)
            reject(error)
          })
      })
    },





    destroyToken(context) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
      if (context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          axios.post('http://localhost:8080/SerialsTrelin/Logout')
            .then(response => {
              localStorage.removeItem('access_token')
              localStorage.removeItem('username')
              context.commit('destroyToken')
              resolve(response)
            })
            .catch(error => {
              localStorage.removeItem('access_token')
              localStorage.removeItem('username')
              context.commit('destroyToken')
              reject(error)
            })
        })
      }
    },


  }
})