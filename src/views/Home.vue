<template>
	<Title text="Today's Deals" />

	<div class="filter__options">
		<Select :title="'Per Page'"
			:options="sizeOptions"
			@select-option="selectPageSize"
			@select-default="defaultPageSize"
		/>
		<Select :title="'Sort By'"
			:options="sortOptions"
			@select-option="selectSort"
			@select-default="defaultSort"
		/>
	</div>

	<div v-if="loading === true">
		<Spinner />
	</div>
	
	<GameDeal v-for="deal in deals" :key="deal.dealID" :deal="deal" />

	<Pages :currentPage="Number(pageNumber)" 
		:numberOfPages="Number(60)"
		:showPagesOffset="Number(3)"
		@select-page="selectPageNumber" 
	/>
</template>

<script>
import axios from 'axios'
import Spinner from '@/components/shared/Spinner' 
import Title from '@/components/shared/Title'
import Select from '@/components/shared/Select'
import GameDeal from '@/components/home/GameDeal'
import Pages from '@/components/shared/Pages'

export default {
	name: 'Home',
	components: {
		Spinner,
		Title,
		Select,
		GameDeal,
		Pages
	},
	data() {
		return {
			loading: false,
			pageNumber: "1",
			pageSize: Number,
			sizeOptions: ["10", "15", "20", "30"],
			sortBy: String,
			sortOptions: ["Deal Rating", "Title", "Savings", "Price", "Metacritic", "Release"],
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
		defaultPageSize(option) {
			this.pageSize = option
		},
		selectSort(option) {
			this.sortBy = option
			this.getGameDeals()
		},
		defaultSort(option) {
			this.sortBy = option
		},
		selectPageNumber(page) {
			this.pageNumber = page
			this.getGameDeals()
		},
		getGameDeals() {
			this.loading = true

			axios.get(`https://www.cheapshark.com/api/1.0/deals?pageNumber=${this.pageNumber}&pageSize=${this.pageSize}&sortBy=${this.sortBy}`)
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
  display: flex;
  margin-bottom: 0.5em;
  font-size: 1.05rem;
}

.filter__options > * {
	margin-right: 0.5rem;
}

.filter__options >:last-child {
	margin-right: 0;
}
</style>
