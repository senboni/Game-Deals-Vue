<template>
  <div class="header">
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
.header {
  color: gray;
  font-weight: 600;
  font-size: 1.5rem;
}
</style>
