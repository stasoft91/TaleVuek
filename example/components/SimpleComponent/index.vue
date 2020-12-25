<template>
  <div>HELLO I AM COMPONENT "{{ title }}", this is so deep! <span v-if="deep && deep.deepParam">"{{ deep.deepParam }}"</span></div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    deep: {
      type: Object,
      required: true
    }
  }
}
</script>
