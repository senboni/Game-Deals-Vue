<template>
	<div :class="[expanded ? 'game-deal expanded' : 'game-deal']">
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
		<div v-if="expanded === true">
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
			if(this.deal.steamRating < 1) {
				return this.deal.steamRatingText
			}

			return String.empty
		},
		metacritic() {
			if(this.deal.metacriticScore > 0) {
				return this.deal.metacriticScore
			}

			return String.empty
		},
		releaseDate() {
			if(this.deal.releaseDate == 0) {
				return String.empty
			}

			var date = new Date(this.deal.releaseDate * 1000)
			return `${date.getUTCFullYear()}/${date.getUTCMonth()}/${date.getUTCDate()}`
		}
	}
}
</script>

<style scoped>
.game-deal {
	padding: 1.25em;
	border-radius: 10px;
}

.game-deal:hover {
	background: var(--clr-dark__white);
}

.expanded {
	background: linear-gradient(312deg, var(--clr-white) 0%, var(--clr-dark__white) 100%);
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
	color: var(--clr-gray);
	font-size: 1.25rem;
	font-weight: 700;
}

.price-heading {
	display: grid;
	grid-gap: 0.25em;
	grid-template-columns: 1fr auto;
	justify-items: end;
	
	-webkit-box-shadow: 4px 3px 15px 0px var(--clr-silver);
	-moz-box-shadow: 4px 3px 15px 0px var(--clr-silver);
	box-shadow: 4px 3px 15px 0px var(--clr-silver);
	border-radius: 10px;
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

.detail {
	display: grid;
	grid-template-columns: 35% auto;

	padding: 0.25em 0;
	color: var(--clr-light__gray);
}
</style>
