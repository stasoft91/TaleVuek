<template><input v-model="proxyValue"></template>
<script>
export default {
  props: ['value'],
  computed: {
    proxyValue: {
      get () { return this.value },
      set (newValue) { this.$emit('input', newValue) }
    }
  }
}
</script>
