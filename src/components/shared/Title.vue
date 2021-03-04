<template>
  <div class="title__text">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.title__text {
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
}
</style>
