import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fruits: [{
        name: 'Banana',
        quantity: 0
      },
      {
        name: 'Watermelon',
        quantity: 0
      },
      {
        name: 'Mango',
        quantity: 0
      }
    ]
  },
  mutations: {
    addFruits(state, index) {
      state.fruits[index].quantity++;
    },
    reStart(state){
        state.fruits.forEach(element => {
            element.quantity = 0;
        })
    }
  },
  actions: {

  }
})
