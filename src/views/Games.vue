<template>
	<SearchBar @submit-search="submitSearch" />

	<div v-if="loading === true">
		<Spinner />
	</div>

	<div class="games-container">
		<GameInfo
			v-for="game in games"
			:key="game.gameID"
			:game="game"
		/>
	</div>
</template>

<script>
import axios from 'axios'
import SearchBar from '@/components/games/SearchBar'
import Spinner from '@/components/shared/Spinner'
import GameInfo from '@/components/games/GameInfo'

export default {
	name: 'Games',
	components: {
		SearchBar,
		Spinner,
		GameInfo
	},
	data() {
		return {
			loading: false,
			searchInput: "reddeadred",
			games: null
		}
	},
	mounted() {
		this.getGames(this.searchInput)
	},
	methods: {
		getGames(input) {
			this.loading = true

			axios.get(`https://www.cheapshark.com/api/1.0/games?title=${input}`)
				.then(res => {
					this.games = res.data
				})
				.catch(err => {
					console.log(err)
				})
				.then(() => {
					this.loading = false
				})
		},
		submitSearch(input) {
			this.getGames(input)
		}
	},
	computed: {
	}
}
</script>

<style scoped>
.games-container {
	margin-top: 3rem;
}
</style>
