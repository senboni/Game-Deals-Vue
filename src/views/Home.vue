<template>
  <Title msg="Today's Deals"/>

  <div class="yo">deal 1</div>
  <div class="yo">deal 1</div>
  <div class="yo">deal 1</div>
</template>

<script>
import Title from '@/components/shared/Title.vue'

export default {
  name: 'Home',
  components: {
    Title
  }
}
</script>

<style>
.yo {
  color: black;
}
</style>
