<template>
	<div :class="[expanded ? 'game-deal expanded' : 'game-deal']" tabindex="0">
		<div class="heading__container">
			<i :class="['arrow fas', expanded ? 'fa-sort-up' : 'fa-sort-down']"></i>
			<div class="heading" @click="showDetails">
				<div class="title">
					{{deal.title}}
				</div>
				<div v-if="onSale" class="price-heading">
					<div class="price">
						<del>{{normalPrice}}</del>
					</div>
					<div class="discount">
						{{discount}}
					</div>
					<div class="sale-price gray-text">
						{{salePrice}}
					</div>
				</div>
				<div v-else class="sale-price gray-text">
					{{normalPrice}}
				</div>
			</div>
		</div>
		<div :class="[expanded ? 'collapsible' : 'collapsible collapsed']">
			<div class="details-container">
				<div class="thumb" :style="thumb"></div>
				<div class="details">
					<div class="detail">
						<div>Release Date</div>
						<strong>{{releaseDate}}</strong>
					</div>
					<div class="detail">
						<div>Steam Rating</div>
						<strong>{{steamRating}}</strong>
					</div>
					<div class="detail">
						<div>Metacritic Score</div>
						<strong>{{metacritic}}</strong>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'GameDeal',
		props: {
		deal: Object
	},
	data() {
		return {
			expanded: false
		}
	},
	methods: {
		showDetails() {
			this.expanded = !this.expanded
		}
	},
	computed: {
		onSale() {
			return this.deal.isOnSale > 0
		},
		discount() {
			return `-${Math.round(this.deal.savings)}%`
		},
		normalPrice() {
			return `$${this.deal.normalPrice}`
		},
		salePrice() {
			return `$${this.deal.salePrice}`
		},
		steamRating() {
			if(this.deal.steamRating > 0) {
				return this.deal.steamRatingText
			}

			return "N/A"
		},
		metacritic() {
			if(this.deal.metacriticScore > 0) {
				return this.deal.metacriticScore
			}

			return "N/A"
		},
		releaseDate() {
			if(this.deal.releaseDate == 0) {
				return "N/A"
			}

			var date = new Date(this.deal.releaseDate * 1000)
			return `${date.getUTCFullYear()}/${date.getUTCMonth()}/${date.getUTCDate()}`
		},
		thumb() {
			return `background-image: url(${this.deal.thumb})`
		}
	}
}
</script>

<style scoped>
.game-deal {
	padding: 1.25em;
	margin-bottom: 0.25rem;
	border-radius: var(--border-radius);
	animation: fadeIn 0.3s ease-in-out;
}

.game-deal:hover {
	background-color: var(--clr-dark__white);
}

.game-deal:focus {
	outline: none;
}

.expanded {
	background: linear-gradient(312deg, var(--clr-dark__white) 0%, var(--clr-dark__white) 100%);
}

.expanded:hover {
	background: var(--clr-dark__white);
}

.heading__container {
	display: grid;
	grid-template-columns: auto 1fr;
}

.arrow {
	align-self: center;
	font-size: 2rem;
	margin-right: 1.5rem;
}

.fa-sort-down {
	transform: translateY(-25%);
	color: var(--clr-silver);
}

.fa-sort-up {
	transform: translateY(25%);
	color: var(--clr-silver);
}

*[data-theme=dark] .fa-sort-down {
	color: var(--clr-dark__white);
}

*[data-theme=dark] .fa-sort-up {
	color: var(--clr-light__gray);
}

.game-deal:hover .arrow {
	color: var(--clr-gray);
}

.heading {
	display: flex;
	justify-content: space-between;
}

.heading:hover {
	cursor: pointer;
}

.title {
	align-self: end;
	font-size: 1.15rem;
	font-weight: 700;
	margin-bottom: 1rem;
}

.price-heading {
	display: grid;
	grid-gap: 0.25em;
	grid-template-columns: 1fr auto;
	justify-items: end;
	
	-webkit-box-shadow: var(--box-shadow);
	-moz-box-shadow: var(--box-shadow);
	box-shadow: var(--box-shadow);
	border-radius: var(--border-radius);
	padding: 0.6em 0.4em;
}

.discount {
	grid-area: 1 / 2 / 3 / 3;
	align-self: center;

	font-size: 1.5rem;
	font-weight: 700;
	color: var(--clr-purple);
	padding-left: 0.25em;
}

.price {
	align-self: end;
	font-size: 0.75rem;
	font-weight: 400;
	color: var(--clr-light__gray);
}

.sale-price {
	align-self: start;
	font-size: 1.05rem;
	font-weight: 600;
}

.details-container {
	display: grid;
	grid-template-columns: 20% 1fr;
}

.details {
	display: grid;
	grid-template-columns: 1fr;
	margin-top: 1em;
}

@media (min-width: 660px) {
	.details {
		grid-template-columns: 1fr 1fr;
	}
}

.detail {
	color: var(--clr-light__gray);
	display: grid;
	grid-template-columns: 40% 60%;
}

.detail * {
	padding: 0.25em 0 1em 0.75em;
	overflow: hidden;
	text-overflow: ellipsis;
}

.collapsible {
	overflow: hidden;
	height: auto;
	max-height: 10em;
	transition: max-height 0.25s ease-in-out;
}

.collapsed {
	max-height: 0;
}

.thumb {
	margin-right: 0.5rem;
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
}
</style>
