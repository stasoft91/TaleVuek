<template>
  <div>
    <div class="box content">
      <article class="component">
        <component :is="componentName" v-bind="knobValues" />
      </article>
    </div>
    <div class="box content">
      <article v-for="knob in componentKnobs" :key="knob.name" class="knobs">
        {{ knob.name }}: <component :is="knob.type+'Knob'" v-model="knobValues[knob.name]" />
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
      knobValues: {}
    }
  },
  computed: {
    componentName () {
      return this.$store.state.talevuekModule.currentComponent.title
    },
    componentKnobs () {
      if (!this.$store.state.talevuekModule.currentComponent.knobs) { return {} }

      const result = []
      for (const [key, value] of Object.entries(this.$store.state.talevuekModule.currentComponent.knobs)) {
        result.push({ type: value, name: key })
      }

      return result
    }
  }
}
</script>
