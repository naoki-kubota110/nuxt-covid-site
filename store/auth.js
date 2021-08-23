import Cookie from 'js-cookie'
const cookieparser = require('cookieparser')


export const state = () => ({
  isLogin: true,
  token: "",
  user: {}
})

export const mutations = {
  setToken(state,token){
    state.token = token
  }
}

export const actions = {
  authenticateUser({commit}, payload){
    let authUrl =  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + process.env.ApiKey;
    if(!payload.isLogin){
      authUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + process.env.ApiKey
    }
    this.$axios.$post(authUrl, {
      email: payload.email,
      password: payload.password,
      returnSecureToken: true
    })
    .then(res => {
      commit("setToken", res.idToken)
      Cookie.set('jwt', res.idToken) 
    })
    .catch(err => console.log(err))
  },
  nuxtServerInit({ commit, getters }, { req }) {
    let token = null
    if(req.headers.cookie){
      const parsed = cookieparser.parse(req.headers.cookie)
      try{
        token = JSON.parse(parsed.auth)
      } catch(err){
        console.log(err)
      }
    }
    commit("setToken",token)
  },
}