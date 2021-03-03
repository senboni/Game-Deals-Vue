<template>
  <Title msg="Today's Deals"/>

  <div v-if="loading === false">
    <div v-for="deal in deals" :key="deal.dealID">
      {{deal.title}} {{deal.normalPrice}} {{deal.salePrice}}
    </div>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script>
import Title from '@/components/shared/Title.vue'
import axios from 'axios'

export default {
    name: 'Home',
    components: {
        Title
    },
    data() {
      return {
        loading: false,
        deals: []
      }
    },
    mounted() {
      this.getGameDeals()
    },
    methods: {
      getGameDeals() {
        this.loading = true

        axios.get(`https://www.cheapshark.com/api/1.0/deals?pageNumber=1&pageSize=3`)
          .then(res => {
              this.deals = res.data
          })
          .catch(err => {
              console.log(err)
          })
          .then(() => {
              this.loading = false
          })
      }
    }
}
</script>

<style>
.yo {
  color: black;
}
</style>
