export const state = () => ({
    counter: 0,
    userEmail:'',
    bodyClass:''
  })
  
  export const mutations = {
    increment(state) {
      state.counter++
    },
    changeEmail(state, data){
        state.userEmail=data
    },
    SetClass(state, bodyClass) {
      state.bodyClass = bodyClass
    }
  }
  export const getters = {
    getUserEmail(state) {
      return state.auth.loggedIn
    }
  }