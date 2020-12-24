<template>
  <div>HELLO I AM COMPONENT "{{ title }}"</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
