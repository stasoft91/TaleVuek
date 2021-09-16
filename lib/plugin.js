import Vue from 'vue'
import Buefy from 'buefy'

const options = JSON.parse('<%= JSON.stringify(options) %>')

export default function (context) {
  Vue.use(Buefy)

  const { app, store } = context
  const taleVuekPage = {
    name: 'TaleVuek',
    path: '/talevuek',
    chunkName: 'talevuek',
    component: () => import('talevuek/lib/index.vue').then(m => m.default || m),
  }
  // inject the new route
  app.router.addRoutes([taleVuekPage])

  // ((?![\\/]node_modules|vendor[\\/]).)*  -> ????
  const tales = require.context('@', true, /[A-Z]\w+\.(tale).([tj]s)$/)

  const taleComponents = []
  tales.keys().forEach((fileName) => {
    const taleConfig = tales(fileName)

    const taleName = (fileName
      .split('/')
      .pop())?.split('.')[0]

    if (taleName) {
      const tale = taleConfig.default || taleConfig
      taleComponents.push({
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
      componentList: taleComponents,
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
