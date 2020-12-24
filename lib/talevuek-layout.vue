<template>
  <div class="body">
    <nav class="navbar is-white topNav">
      <div class="container">
        <div class="navbar-brand">
          <span class="navbar-item has-text-weight-bold has-text-success-dark is-size-2">
            TaleVuek
          </span>
        </div>
      </div>
    </nav>
    <section id="wrapper" class="container">
      <div class="columns">
        <div class="column is-3">
          <b-field label="Search components">
            <b-input
              v-model="componentSearchStr"
              placeholder="e.g. ProductPrice"
              clearable
            />
          </b-field>
          <b-menu>
            <b-menu-list v-for="category in categories" :key="category" :label="category">
              <b-menu-item v-for="component in componentsOfCategory(category)" :key="component.title" :label="component.title" @click="setCurrentComponent(component)" />
            </b-menu-list>
          </b-menu>
        </div>
        <div class="column is-9">
          <nuxt />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      componentSearchStr: ''
    }
  },
  computed: {
    categories () {
      return [...new Set(this.components.map(component => component.category))]
    },

    components () {
      return this.$store.state.talevuekModule.componentList
        .filter(component => component.title.toLocaleLowerCase().includes(this.componentSearchStr.toLocaleLowerCase()))
    }
  },
  methods: {
    componentsOfCategory (category) {
      return this.components.filter(c => c.category === category)
    },
    ...mapMutations({ setCurrentComponent: 'talevuekModule/setCurrentComponent' })
  }
}
</script>

<style>
</style>
