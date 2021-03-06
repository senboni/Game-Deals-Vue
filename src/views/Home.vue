<template>
	<Title msg="Today's Deals"/>

	<div class="filter__options">
		<Select :title="'Deals Per Page'" :options="sizeOptions" @select-option="selectPageSize" />
	</div>

	<div v-if="loading === true">
		<Spinner />
	</div>
	<template v-else>
		<GameDeal v-for="deal in deals" :key="deal.dealID" :deal="deal" />
	</template>
</template>

<script>
import Spinner from '@/components/shared/Spinner' 
import Title from '@/components/shared/Title'
import Select from '@/components/shared/Select'
import GameDeal from '@/components/home/GameDeal'
import axios from 'axios'

export default {
	name: 'Home',
	components: {
		Spinner,
		Title,
		Select,
		GameDeal
	},
	data() {
		return {
			loading: false,
			pageNumber: "1",
			pageSize: Number,
			sizeOptions: ["5", "10", "15"],
			deals: []
		}
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
