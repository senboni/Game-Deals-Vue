<template>
	<div :class="[expanded ? 'game-deal expanded' : 'game-deal']" tabindex="0">
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
		<div :class="[expanded ? 'collapsible' : 'collapsible collapsed']">
			<div class="details">
			<div class="thumb" :style="thumb"></div>
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
	border-radius: var(--border-radius);

	animation: fadeIn 0.3s ease-in-out;
}

.game-deal:hover {
	background-color: var(--clr-dark__white);
}

.game-deal:focus {
	outline-color: var(--clr-silver);
}

.expanded {
	background: linear-gradient(312deg, var(--clr-dark__white) 0%, var(--clr-dark__white) 100%);
}

.expanded:hover {
	background: var(--clr-dark__white);
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
	font-size: 1.25rem;
	font-weight: 700;
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

.details {
	display: grid;
	grid-template-columns: 10% 45% 45%;
}

.detail {
	color: var(--clr-light__gray);
	display: grid;
	grid-template-columns: 40% 60%;
}

.detail * {
	padding: 0.25em 0 1em 0.75em;
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
	grid-area: 1 / 1 / 3 / 2;

	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
}
</style>
