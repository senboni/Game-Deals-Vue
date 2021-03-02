<template>
  <Title msg="Today's Deals"/>

  <div v-for="deal in deals" :key="deal.id">
    {{deal.name}} {{deal.id}}
  </div>
</template>

<script>
import Title from '@/components/shared/Title.vue'

export default {
  name: 'Home',
  components: {
    Title
  },
  data() {
    return {
      deals: [
        {
          id: 1,
          name: "deald"
        },
        {
          id: 2,
          name: "dealdd"
        },
        {
          id: 3,
          name: "dealaa"
        },
      ]
    }
  }
}
</script>

<style>
.yo {
  color: black;
}
</style>
