import Index from 'talevuek/lib/index.vue'

import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

export default function (context) {
  const { app, store } = context
  const taleVuekPage = {
    name: 'TaleVuek',
    path: '/talevuek',
    chunkName: 'talevuek',
    component: Index
  }
  // inject the new route
  app.router.addRoutes([taleVuekPage])

  const tales = require.context('@/components', true, /[A-Z]\w+\.(tale).([tj]s)$/)
  const componentTales = []
  tales.keys().forEach((fileName) => {
    const taleConfig = tales(fileName)

    const taleName = (fileName
      .split('/')
      .pop())?.split('.')[0]

    if (taleName) {
      const tale = taleConfig.default || taleConfig
      componentTales.push({
        title: tale.title,
        category: tale.category,
        knobs: tale.knobs
      })

      Vue.component(taleName, tale.component)
    }
  })

  store.registerModule('talevuekModule', {
    namespaced: true,
    state:{
      currentComponent: {},
      componentList: componentTales,
      knobs: []
    },
    mutations: {
      setCurrentComponent (state, payload) {
        state.currentComponent = payload
      },
      setComponentList (state, payload) {
        state.componentList = payload
      },
      setKnobs(state, payload){
        state.knobs = payload
      }
    }
  })
}
