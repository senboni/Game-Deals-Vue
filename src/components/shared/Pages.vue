<template>
	<div class="container">
		<div @click="gotoPage(1)" :class="[1 == currentPage ? 'current-page' : '', 'number']">
			{{1}}
		</div>

		<div v-if="notCloseToFirstPage" class="dots">...</div>

		<template v-for="number in numberOptions" :key="number">
			<div v-if="isInPagesSpan(number)" 
				@click="gotoPage(number)"
				:class="[number == currentPage ? 'current-page' : '', 'number']"
			>
				{{number}}
			</div>
		</template>

		<div v-if="notCloseToLastPage" class="dots">...</div>

		<div :class="[numberOfPages == currentPage ? 'current-page' : '', 'number']"
			@click="gotoPage(numberOfPages)"
		>
			{{numberOfPages}}
		</div>
	</div>
</template>

<script>
export default {
	name: 'Pages',
	props: {
		numberOfPages: Number,
		currentPage: Number,
		showPagesOffset: Number
	},
	emits: ['select-page'],
	methods: {
		gotoPage(pageNum) {
			this.$emit('select-page', pageNum)
		},
		isInPagesSpan(number) {
			return number > 1 && number < this.numberOfPages
		}
	},
	computed: {
		numberOptions() {
			let array = []

			for (let i = this.showPagesOffset-1; i > 0; i--) {
				array.push(this.currentPage-i)
			}

			for (let i = 0; i < this.showPagesOffset; i++) {
				array.push(this.currentPage+i)
			}

			return array
		},
		notCloseToFirstPage() {
			return (this.currentPage-this.showPagesOffset) > 1
		},
		notCloseToLastPage() {
			return (this.currentPage+this.showPagesOffset) < this.numberOfPages
		}
	}
}
</script>

<style scoped>
.container {
	display: flex;
	align-items: center;
	color: var(--clr-silver);
	font-weight: 600;
}

.number {
	width: 3em;
	height: 3em;
	border-radius: 50%;
	padding: 0.75rem;
	text-align: center;
}

.number:hover {
	cursor: pointer;
	color: var(--clr-gray);
	background: var(--clr-silver);
}

.current-page {
	color: var(--clr-purple);
}

.dots {
	letter-spacing: 0.25em;
}
</style>
