<template>
  <div>
    <span>"{{ title1 }}"</span>
    <span>"{{ title2 }}"</span>
    <span>"{{ title3 }}"</span>
  </div>
</template>

<script>
export default {
  props: {
    title1: {
      type: String,
      required: true
    },
    title2: {
      type: String,
      required: true
    },
    title3: {
      type: String,
      required: true
    }
  }
}
</script>
