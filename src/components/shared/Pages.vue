<template>
	<div class="container">
		<template v-for="number in numberOptions" :key="number">
			<div v-if="number > 0"
				:class="[number == currentPage ? 'current-page' : '', 'number']">
				{{number}}
			</div>
		</template>
		<div class="dots">...</div>
		<div :class="[number == currentPage ? 'current-page' : '', 'number']">
			{{numberOfPages}}
		</div>
	</div>
</template>

<script>
export default {
	name: 'Pages',
	props: {
		numberOfPages: Number,
		currentPage: Number
	},
	emits: ['select-page'],
	data() {
		return {
		}
	},
	mounted() {
	},
	methods: {
	},
	computed: {
		numberOptions() {
			const cp = Number(this.currentPage)
			return [cp-2, cp-1, cp, cp+1, cp+2]
		}
	}
}
</script>

<style scoped>
.container {
	display: flex;
	align-items: center;
	color: var(--clr-silver);
}

.number {
	width: 3em;
	height: 3em;
	border-radius: 50%;
	padding: 0.75rem;
	
	text-align: center;
	font-weight: 600;
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
