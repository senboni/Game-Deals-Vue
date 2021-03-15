<template>
	<SearchBar @submit-search="submitSearch" />
</template>

<script>
import SearchBar from '@/components/games/SearchBar'

export default {
	name: 'Games',
	components: {
		SearchBar
	},
	data() {
		return {
			searchInput: ''
		}
	},
	methods: {
		submitSearch() {
			console.log('no')
		}
	},
	computed: {
	}
}
</script>

<style scoped>

</style>
