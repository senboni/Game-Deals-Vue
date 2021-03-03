<template>
  <Title msg="Today's Deals"/>

  <div class="filter__options">
    <FilterOptions :title="'Deals Per Page'" :options="sizeOptions" @select-option="selectPageSize" />
  </div>
  
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
import Title from '@/components/shared/Title'
import FilterOptions from '@/components/home/FilterOptions'
import axios from 'axios'

export default {
    name: 'Home',
    components: {
        Title,
        FilterOptions
    },
    data() {
      return {
        loading: false,
        pageNumber: "1",
        pageSize: "5",
        sizeOptions: ["5", "10", "15"],
        deals: []
      }
    },
    mounted() {
      this.getGameDeals()
    },
    methods: {
      selectPageSize(option) {
        this.pageSize = option
        this.getGameDeals()
      },
      getGameDeals() {
        this.loading = true

        axios.get(`https://www.cheapshark.com/api/1.0/deals?pageNumber=${this.pageNumber}&pageSize=${this.pageSize}`)
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
.filter__options {
  display: inline-block;
  margin-bottom: 0.5em;
}

.filter__options * {
  margin-right: 0.5em;
}

.filter__options *:last-child {
  margin-right: 0;
}

.yo {
  color: black;
}
</style>
