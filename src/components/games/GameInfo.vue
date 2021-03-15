<template>
  	<div class="game-info">
		<div class="thumb" :style="thumb"></div>
		<div class="title-price__container">
			<h1>{{game.external}}</h1>
			<div class="price">${{game.cheapest}}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SearchBar',
	props: {
		game: {
			gameID: "",
			steamAppID: "",
			cheapest: "",
			cheapestDealID: "",
			external: "",
			internalName: "",
			thumb: ""
		}
	},
	data() {
		return {
		}
	},
	methods: {
	},
	computed: {
		thumb() {
			return `background-image: url(${this.game.thumb})`
		}
	}
}
</script>

<style scoped>
.game-info {
	padding: 1.25em;
	margin-bottom: 0.25rem;
	border-radius: var(--border-radius);
	animation: fadeIn 0.3s ease-in-out;
	display: grid;
	grid-template-columns: 20% auto;
}

.game-info:hover{
	background: var(--clr-dark__white);
}

.thumb {
	height: 3.5em;
	-webkit-box-shadow: var(--box-shadow);
	-moz-box-shadow: var(--box-shadow);
	box-shadow: var(--box-shadow);
	border-radius: var(--border-radius);
	background-repeat: no-repeat;
	background-position: center left;
	background-size: cover;
}

.title-price__container {
	display: flex;
	justify-content: space-between;
}

h1 {
	font-size: 1.1rem;
	padding: 0 0.75em;
}

.price {
	font-size: 1.25rem;
	font-weight: 600;
	color: var(--clr-purple);
}
</style>
