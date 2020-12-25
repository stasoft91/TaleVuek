<template>
  <div>
    <div class="box content">
      <article class="component">
        <component :is="componentName" v-if="isDataReady" v-bind="knobValues" />
      </article>
    </div>
    <div class="box content">
      <article v-for="prop in componentKnobs" :key="prop.name" class="knobs">
        <span v-if="prop.path === ''">{{ prop.name }}: <component :is="prop.knob.type+'Knob'" v-model="knobValues[prop.name]" /></span>
        <span v-else-if="prop.path.split('.').length === 1">{{ prop.name }}: <component :is="prop.knob.type+'Knob'" v-model="knobValues[prop.path.split('.')[0]] [prop.name]" /></span>
        <span v-else-if="prop.path.split('.').length === 2">{{ prop.name }}: <component :is="prop.knob.type+'Knob'" v-model="knobValues[prop.path.split('.')[0]] [prop.path.split('.')[1]] [prop.name]" /></span>
        <span v-else-if="prop.path.split('.').length === 3">{{ prop.name }}: <component :is="prop.knob.type+'Knob'" v-model="knobValues[prop.path.split('.')[0]] [prop.path.split('.')[1]] [prop.path.split('.')[2]] [prop.name]" /></span>
        <span v-else-if="prop.path.split('.').length === 4">{{ prop.name }}: <component :is="prop.knob.type+'Knob'" v-model="knobValues[prop.path.split('.')[0]] [prop.path.split('.')[1]] [prop.path.split('.')[2]] [prop.path.split('.')[3]] [prop.name]" /></span>
      </article>
    </div>
  </div>
</template>

<script>
import textKnob from 'talevuek/lib/knobs/textKnob.vue'
import booleanKnob from 'talevuek/lib/knobs/booleanKnob.vue'
import 'buefy/dist/buefy.css'

export default {
  components: {
    textKnob,
    booleanKnob
  },
  layout: 'talevuek-layout',
  options: {
    layout: 'talevuek-layout'
  },
  data () {
    return {
      knobValues: {},
      knobs: [],
      isDataReady: false
    }
  },
  computed: {
    componentName () {
      return this.$store.state.talevuekModule.currentComponent.title
    },
    componentKnobs () {
      if (!this.$store.state.talevuekModule.currentComponent.knobs) { return [] }

      this.recurseWalkKnobs(this.$store.state.talevuekModule.currentComponent.knobs)

      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.isDataReady = true
      return this.knobs
    }
  },
  watch: {
    componentName () { this.isDataReady = false }
  },
  methods: {
    recurseWalkKnobs (property, path) {
      if (path === undefined) {
        this.knobs = []
        this.knobValues = {}
        path = ''
      }

      for (const [key, value] of Object.entries(property)) {
        if (value.isTalevuekKnob) {
          this.knobs.push({
            knob: value,
            name: key,
            path
          })

          let knobValues = this.knobValues
          path.split('.').forEach((pathSection) => {
            if (pathSection !== '') {
              this.$set(knobValues, pathSection, { ...(knobValues[pathSection] || {}) })
              knobValues = knobValues[pathSection]
            }
            this.$set(knobValues, key, value.defaultValue)
          })
        } else {
          this.recurseWalkKnobs(value, `${path}.${key}`.replace(/^\./, ''))
        }
      }
    }
  }
}
</script>
